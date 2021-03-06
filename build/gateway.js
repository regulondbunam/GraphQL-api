"use strict";

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const { ApolloServer } = require("apollo-server-express");
const { ApolloGateway } = require("@apollo/gateway");
require('dotenv').config();

const PORT = process.env.GRAPHQL_GATEWAY_PORT || 4001;
const CLOSED_SERVICES = process.env.GRAPHQL_CLOSED_SERVICES_PORT || 4002;
const OPEN_SERVICES = process.env.GRAPHQL_OPEN_SERVICES_PORT || 4003;

const gateway = new ApolloGateway({
    serviceList: [{ name: "openTools", url: `http://localhost:${OPEN_SERVICES}/graphql` }, { name: "closedTools", url: `http://localhost:${CLOSED_SERVICES}/graphql` }]
});

const server = new ApolloServer({
    gateway,
    subscriptions: false
});

const app = (0, _express2.default)();

server.applyMiddleware({
    app,
    cors: {
        origin: '*',
        methods: "GET, HEAD, PUT, PATCH, POST, DELETE"
    }
});

const servExpress = app.listen(PORT, () => console.log(`El servidor esta funcionando en http://localhost:${servExpress.address().port}${server.graphqlPath}`));