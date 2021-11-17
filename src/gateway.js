import express, { response } from 'express';
import {playgroundTabs} from './config/gatewayPlaygroundOptions';
const {ApolloServer} = require("apollo-server-express");
const {ApolloGateway} = require("@apollo/gateway");
const { createApolloFetch } = require('apollo-fetch');
require('dotenv').config();

// getting env variables
const PORT = process.env.GRAPHQL_GATEWAY_PORT || 4001;
const CLOSED_SERVICES = process.env.GRAPHQL_CLOSED_SERVICES_PORT || 4002;
const OPEN_SERVICES = process.env.GRAPHQL_OPEN_SERVICES_PORT || 4003;
const HT_SERVICES_URL = process.env.HT_SERVICES_URL;

// Setting up the express app
const app = express();

// app is an instance of EventEmitter, in this case is added a event when emit sends "ready"
app.on('ready', function(){
  // Stoping interval for trying connect services
  clearInterval(conectionTester)
  // Services will be be added to gateway once they are ready to solve queries
  const gateway = new ApolloGateway({
      serviceList: [
          {name: "openTools", url: `http://localhost:${OPEN_SERVICES}/graphql`},
          {name: "closedTools", url: `http://localhost:${CLOSED_SERVICES}/graphql`},
          {name: "htServices", url: `${HT_SERVICES_URL}`}
      ]
  });

  //Setting up Apollo Federation server
  const server = new ApolloServer({
      gateway,
      subscriptions: false,
      playground: playgroundTabs,
      formatError: (err) => ({
        message: err.message,
        status: err.extensions.exception.status,
        statusCode: err.extensions.exception.statusCode,
    })
  });

  server.applyMiddleware({
    app,
    cors:{
        origin: '*',
        methods: "GET, HEAD, PUT, PATCH, POST, DELETE"
    }
  });
  
  // Starting server on port for listening
  const servExpress = app.listen(PORT, ()=> console.log(`El servidor esta funcionando en http://localhost:${servExpress.address().port}${server.graphqlPath}`))
});

// Creates an apollo-fetch instance for testing connection to Open Services Server
let localFetch = createApolloFetch({
  uri: `http://localhost:${OPEN_SERVICES}/graphql`
});

// Creates an apollo-fetch instance for testing connection to Remote HT Services Server
let htFetch = createApolloFetch({
  uri: `${HT_SERVICES_URL}`
});

// Adding an interval for looping testing until services are available
let conectionTester = setInterval(function(){test_services()}, 5000);

// function that calls Open Services API to obtain an introspection query response,
// if an error ocurs for no available connection, a message of wait of retry is showed
function test_services() {
  localFetch({
    query: `
    query {
      __type(name:"Query"){
        name
      }
    }`
  }).then(res => {
    htFetch({
      query: `
      query {
        __type(name:"Query"){
          name
        }
      }`
    }).then(res => {
      console.log("HT Services READY")
      app.emit("ready")
    }).catch((e) => {
      console.log("HT Services aren't ready, trying again in 5 seconds")
    });
  }).catch((e) => {
    console.log("Local Services aren't ready, trying again in 5 seconds")
  });
}