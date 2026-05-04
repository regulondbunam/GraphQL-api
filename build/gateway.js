"use strict";

var _express = _interopRequireDefault(require("express"));
var _gatewayPlaygroundOptions = require("./config/gatewayPlaygroundOptions");
var _apolloServerExpress = require("apollo-server-express");
var _gateway = require("@apollo/gateway");
var _apolloServerCore = require("apollo-server-core");
var _apolloFetch = require("apollo-fetch");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
require('dotenv').config();

// Getting env variables
var PORT = process.env.GRAPHQL_GATEWAY_PORT || 4001;
var TOOLS_SERVICES = process.env.GRAPHQL_TOOLS_SERVICES_PORT || 4002;
var DATA_SERVICES = process.env.GRAPHQL_DATA_SERVICES_PORT || 4003;
var HT_SERVICES = process.env.GRAPHQL_HT_SERVICES_PORT || 4004;

// Setting up the express app
var app = (0, _express["default"])();

// A first list with local services is defined, additional services will be be added to gateway once they are ready to solve queries
var gateway;
var services = [{
  name: "dataServices",
  url: "http://localhost:".concat(DATA_SERVICES, "/graphql")
}, {
  name: "toolsServices",
  url: "http://localhost:".concat(TOOLS_SERVICES, "/graphql")
}, {
  name: "htServices",
  url: "http://localhost:".concat(HT_SERVICES, "/graphql")
}];

// app is an instance of EventEmitter, in this case is added a event when emit sends "ready"
app.on('ready', function () {
  // Stoping interval for trying connect services
  clearInterval(conectionTester);
  // function to create and start gateway
  upGraphQLServer(gateway, app);
});

// Creates an apollo-fetch instance for testing connection to Open and HT Services Server
var localFetch = (0, _apolloFetch.createApolloFetch)({
  uri: "http://localhost:".concat(DATA_SERVICES, "/graphql")
});

// Defining a count
var count = 0;
// Adding an interval for looping testing until services are available
var conectionTester = setInterval(function () {
  test_services();
}, 5000);

// function that calls each service to obtain an introspection query response,
// if an error ocurs for no available connection, a message of wait of retry is showed
function test_services() {
  var queryExample = "\n  query {\n    __type(name:\"Query\"){\n      name\n    }\n  }";
  localFetch({
    query: queryExample
  }).then(function (res) {
    gateway = new _gateway.ApolloGateway({
      supergraphSdl: new _gateway.IntrospectAndCompose({
        subgraphs: services
      })
    });
    app.emit("ready");
  })["catch"](function (e) {
    console.log("Local Services aren't ready, trying again in 5 seconds");
  });
}
var upGraphQLServer = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(gateway, app) {
    var server, servExpress;
    return _regenerator().w(function (_context) {
      while (1) switch (_context.n) {
        case 0:
          //Setting up Apollo Federation server
          server = new _apolloServerExpress.ApolloServer({
            gateway: gateway,
            subscriptions: false,
            plugins: [process.env.NODE_ENV === 'production' ? (0, _apolloServerCore.ApolloServerPluginLandingPageDisabled)() : (0, _apolloServerCore.ApolloServerPluginLandingPageGraphQLPlayground)({
              playground: _gatewayPlaygroundOptions.playgroundTabs
            })],
            playground: _gatewayPlaygroundOptions.playgroundTabs,
            formatError: function formatError(err) {
              return {
                message: err.message,
                status: err.extensions.exception.status,
                statusCode: err.extensions.exception.statusCode
              };
            }
          });
          _context.n = 1;
          return server.start();
        case 1:
          // Applying express app to gateway
          server.applyMiddleware({
            app: app,
            cors: {
              origin: '*',
              methods: "GET, HEAD, PUT, PATCH, POST, DELETE"
            }
          });

          // Starting server on port for listening
          servExpress = app.listen(PORT, function () {
            return console.log("El servidor esta funcionando en http://localhost:".concat(servExpress.address().port).concat(server.graphqlPath));
          });
        case 2:
          return _context.a(2);
      }
    }, _callee);
  }));
  return function upGraphQLServer(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();