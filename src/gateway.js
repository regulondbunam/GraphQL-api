import express from 'express';
import { playgroundTabs } from './config/gatewayPlaygroundOptions';
import { ApolloServer } from 'apollo-server-express'
import { ApolloGateway, IntrospectAndCompose } from '@apollo/gateway';
import { ApolloServerPluginLandingPageGraphQLPlayground, ApolloServerPluginLandingPageDisabled } from 'apollo-server-core';
import { createApolloFetch } from 'apollo-fetch';
require('dotenv').config();


// Getting env variables
const PORT = process.env.GRAPHQL_GATEWAY_PORT || 4001;
const CLOSED_SERVICES = process.env.GRAPHQL_CLOSED_SERVICES_PORT || 4002;
const OPEN_SERVICES = process.env.GRAPHQL_OPEN_SERVICES_PORT || 4003;
const HT_SERVICES_URL = process.env.HT_SERVICES_URL;


// Setting up the express app
const app = express();


// A first list with local services is defined, additional services will be be added to gateway once they are ready to solve queries
var gateway
var services = [
  {name: "openTools", url: `http://localhost:${OPEN_SERVICES}/graphql`},
  {name: "closedTools", url: `http://localhost:${CLOSED_SERVICES}/graphql`}
]


// app is an instance of EventEmitter, in this case is added a event when emit sends "ready"
app.on('ready', function(){
  // Stoping interval for trying connect services
  clearInterval(conectionTester)
  // function to create and start gateway
  upGraphQLServer(gateway, app)
});


// Creates an apollo-fetch instance for testing connection to Open and HT Services Server
let localFetch = createApolloFetch({
  uri: `http://localhost:${OPEN_SERVICES}/graphql`
});

let htFetch = createApolloFetch({
  uri: `${HT_SERVICES_URL}`
});

// Defining a count
var count = 0
// Adding an interval for looping testing until services are available
let conectionTester = setInterval(function(){test_services()}, 5000);


// function that calls each service to obtain an introspection query response,
// if an error ocurs for no available connection, a message of wait of retry is showed
function test_services() {
  let queryExample = `
  query {
    __type(name:"Query"){
      name
    }
  }`
  localFetch({
    query: queryExample
  }).then(res => {
    htFetch({
      query: queryExample
    }).then(res => {
      services.push({name: "htServices", url: `${HT_SERVICES_URL}`})
      console.log("HT Services are READY")
      gateway = new ApolloGateway({supergraphSdl: new IntrospectAndCompose({
        subgraphs: services
      })});
      app.emit("ready")
    }).catch((e) => {
      count++
      if(count > 5){
        gateway = new ApolloGateway({supergraphSdl: new IntrospectAndCompose({
          subgraphs: services
        })});
        console.log("Services are starting without HT services")
        app.emit("ready")
      } else {
        console.log(`HT Services aren't ready, trying again in 5 seconds, ${count}/5`)
      }
    });
  }).catch((e) => {
    console.log("Local Services aren't ready, trying again in 5 seconds")
  });
}


const upGraphQLServer = async (gateway, app) => {
  //Setting up Apollo Federation server
  const server = new ApolloServer({
    gateway,
    subscriptions: false,
    plugins: [
        process.env.NODE_ENV === 'production'
          ? ApolloServerPluginLandingPageDisabled()
          : ApolloServerPluginLandingPageGraphQLPlayground(
            {playground: playgroundTabs}
          ),
    ],
    playground: playgroundTabs,
    formatError: (err) => ({
      message: err.message,
      status: err.extensions.exception.status,
      statusCode: err.extensions.exception.statusCode,
    })
  });

  await server.start()

  // Applying express app to gateway
  server.applyMiddleware({
    app,
    cors:{
        origin: '*',
        methods: "GET, HEAD, PUT, PATCH, POST, DELETE"
    }
  });

  // Starting server on port for listening
  const servExpress = app.listen(PORT, ()=> console.log(`El servidor esta funcionando en http://localhost:${servExpress.address().port}${server.graphqlPath}`))
}