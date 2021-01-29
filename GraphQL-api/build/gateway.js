"use strict";

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const { ApolloServer } = require("apollo-server-express");
const { ApolloGateway } = require("@apollo/gateway");
require('dotenv').config();

const PORT = process.env.PORT || 4001;

const gateway = new ApolloGateway({
    serviceList: [{ name: "openTools", url: "http://localhost:4003/graphql" }, { name: "closedTools", url: "http://localhost:4002/graphql" }]
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