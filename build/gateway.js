'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _gatewayPlaygroundOptions = require('./config/gatewayPlaygroundOptions');

var _apolloServerExpress = require('apollo-server-express');

var _gateway = require('@apollo/gateway');

var _apolloServerCore = require('apollo-server-core');

var _apolloFetch = require('apollo-fetch');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

require('dotenv').config();

// Getting env variables
const PORT = process.env.GRAPHQL_GATEWAY_PORT || 4001;
const CLOSED_SERVICES = process.env.GRAPHQL_CLOSED_SERVICES_PORT || 4002;
const OPEN_SERVICES = process.env.GRAPHQL_OPEN_SERVICES_PORT || 4003;
const HT_SERVICES_URL = process.env.HT_SERVICES_URL;

// Setting up the express app
const app = (0, _express2.default)();

// A first list with local services is defined, additional services will be be added to gateway once they are ready to solve queries
var gateway;
var services = [{ name: "openTools", url: `http://localhost:${OPEN_SERVICES}/graphql` }, { name: "closedTools", url: `http://localhost:${CLOSED_SERVICES}/graphql` }];

// app is an instance of EventEmitter, in this case is added a event when emit sends "ready"
app.on('ready', function () {
  // Stoping interval for trying connect services
  clearInterval(conectionTester);
  // function to create and start gateway
  upGraphQLServer(gateway, app);
});

// Creates an apollo-fetch instance for testing connection to Open and HT Services Server
let localFetch = (0, _apolloFetch.createApolloFetch)({
  uri: `http://localhost:${OPEN_SERVICES}/graphql`
});

let htFetch = (0, _apolloFetch.createApolloFetch)({
  uri: `${HT_SERVICES_URL}`
});

// Defining a count
var count = 0;
// Adding an interval for looping testing until services are available
let conectionTester = setInterval(function () {
  test_services();
}, 5000);

// function that calls each service to obtain an introspection query response,
// if an error ocurs for no available connection, a message of wait of retry is showed
function test_services() {
  let queryExample = `
  query {
    __type(name:"Query"){
      name
    }
  }`;
  localFetch({
    query: queryExample
  }).then(res => {
    htFetch({
      query: queryExample
    }).then(res => {
      services.push({ name: "htServices", url: `${HT_SERVICES_URL}` });
      console.log("HT Services are READY");
      gateway = new _gateway.ApolloGateway({ supergraphSdl: new _gateway.IntrospectAndCompose({
          subgraphs: services
        }) });
      app.emit("ready");
    }).catch(e => {
      count++;
      if (count > 5) {
        gateway = new _gateway.ApolloGateway({ supergraphSdl: new _gateway.IntrospectAndCompose({
            subgraphs: services
          }) });
        console.log("Services are starting without HT services");
        app.emit("ready");
      } else {
        console.log(`HT Services aren't ready, trying again in 5 seconds, ${count}/5`);
      }
    });
  }).catch(e => {
    console.log("Local Services aren't ready, trying again in 5 seconds");
  });
}

const upGraphQLServer = async (gateway, app) => {
  //Setting up Apollo Federation server
  const server = new _apolloServerExpress.ApolloServer({
    gateway,
    subscriptions: false,
    plugins: [process.env.NODE_ENV === 'production' ? (0, _apolloServerCore.ApolloServerPluginLandingPageDisabled)() : (0, _apolloServerCore.ApolloServerPluginLandingPageGraphQLPlayground)({ playground: _gatewayPlaygroundOptions.playgroundTabs })],
    playground: _gatewayPlaygroundOptions.playgroundTabs,
    formatError: err => ({
      message: err.message,
      status: err.extensions.exception.status,
      statusCode: err.extensions.exception.statusCode
    })
  });

  await server.start();

  // Applying express app to gateway
  server.applyMiddleware({
    app,
    cors: {
      origin: '*',
      methods: "GET, HEAD, PUT, PATCH, POST, DELETE"
    }
  });

  // Starting server on port for listening
  const servExpress = app.listen(PORT, () => console.log(`El servidor esta funcionando en http://localhost:${servExpress.address().port}${server.graphqlPath}`));
};