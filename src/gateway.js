import express, { response } from 'express';
const {ApolloServer} = require("apollo-server-express");
const {ApolloGateway} = require("@apollo/gateway");
const { createApolloFetch } = require('apollo-fetch');
require('dotenv').config();

// getting env variables
const PORT = process.env.GRAPHQL_GATEWAY_PORT || 4001;
const CLOSED_SERVICES = process.env.GRAPHQL_CLOSED_SERVICES_PORT || 4002;
const OPEN_SERVICES = process.env.GRAPHQL_OPEN_SERVICES_PORT || 4003;
// const HT_SERVICES = process.env.GRAPHQL_HTSERVICES_PORT || 4004;

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
          // {name: "htServices", url: `http://localhost:${HT_SERVICES}/graphql`}
      ]
  });

  //Setting up Apollo Federation server
  const server = new ApolloServer({
      gateway,
      subscriptions: false,
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
let fetch = createApolloFetch({
  uri: `http://localhost:${OPEN_SERVICES}/graphql`
});

// Adding an interval for looping testing until services are available
let conectionTester = setInterval(function(){test_services()}, 5000);

// function that calls Open Services API to obtain an introspection query response,
// if an error ocurs for no available connection, a message of wait of retry is showed
function test_services() {
  fetch({
    query: `
    query {
      __type(name:"Query"){
        name
        description
      }
    }`
  }).then(res => {
    app.emit("ready");
  }).catch((e) => {
    console.log("Services aren't ready, trying again in 5 seconds")
  });
}