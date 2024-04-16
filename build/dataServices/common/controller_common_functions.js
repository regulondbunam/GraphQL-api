"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.commonController = void 0;
var _graphql = require("graphql");
var _mongoose = require("mongoose");
var _gene_model = require("../geneService/gene_model");
var _regulon_model = require("../regulonService/regulon_model");
var _operon_model = require("../operonService/operon_model");
var _srna_model = require("../srnaService/srna_model");
var _sigmulon_model = require("../sigmulonService/sigmulon_model");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); } /**
# Controller Common Functions
	
## Description

Defines function that resolves the query and responses with all documents of
the Collection restricted by a limit and pagination

## Usage 

```javascript
import {commonController} from '../common/controller_common_functions';
```

## Category

RegulonDB datamart web service controller

## License

MIT License

## Author 

RegulonDB Team: Lopez Almazo Andres Gerardo
**/
var commonController = exports.commonController = /*#__PURE__*/function () {
  function commonController() {
    _classCallCheck(this, commonController);
  }
  return _createClass(commonController, null, [{
    key: "getAll",
    value: (
    /** Retrieve a object with all the documents containing in selected collection
       *  @param {Model} collection tells to function the mongoose model to be used
       *  @param {Number} limit defines the page results showed (10 by default)
       *  @param {Number} page select the current result page (0 by default)
       *  @param {String} sortValue tells the function the field by which the results will be sorted
       */
    function () {
      var _getAll = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(collection) {
        var limit,
          page,
          sortValue,
          hasMore,
          response,
          offset,
          total,
          showedResult,
          lastPage,
          err,
          _args = arguments;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              limit = _args.length > 1 && _args[1] !== undefined ? _args[1] : 0;
              page = _args.length > 2 && _args[2] !== undefined ? _args[2] : 0;
              sortValue = _args.length > 3 ? _args[3] : undefined;
              // variable definitions
              hasMore = false;
              // get query response from mongodb through mongoose
              offset = page * limit; // if the limit is greater than 100, the data will not be sorted to
              // reduce the response time; if it is less than or equal to 100 the
              // data will be ordered alphabetically by sortValue
              if (!(limit > 100)) {
                _context.next = 11;
                break;
              }
              _context.next = 8;
              return collection.aggregate([{
                $limit: limit
              }, {
                $skip: offset
              }]).allowDiskUse(true);
            case 8:
              response = _context.sent;
              _context.next = 14;
              break;
            case 11:
              _context.next = 13;
              return collection.find({}).sort(sortValue).limit(limit).skip(offset);
            case 13:
              response = _context.sent;
            case 14:
              _context.next = 16;
              return this.countDocumentsIn(collection);
            case 16:
              total = _context.sent;
              showedResult = limit * (page + 1);
              lastPage = 0;
              if (limit > 0) {
                lastPage = Math.floor(total / limit);
              }
              if (showedResult < total) hasMore = true;
              if (!(page > lastPage)) {
                _context.next = 28;
                break;
              }
              err = new _graphql.GraphQLError('You must select an available page number');
              err.status = 'No Content';
              err.statusCode = 204;
              throw err;
            case 28:
              return _context.abrupt("return", {
                data: response,
                pagination: {
                  limit: limit,
                  currentPage: page,
                  firstPage: 0,
                  lastPage: lastPage || 0,
                  totalResults: total,
                  hasNextPage: hasMore
                }
              });
            case 29:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function getAll(_x) {
        return _getAll.apply(this, arguments);
      }
      return getAll;
    }()
    /** Get the count document of the selected collection
       *  @param {Model} collection tells to function the mongoose model to be used
       *  @param {String} filter needs the filter used by the query to get the count (by default is 
       *  empty {} por getAll count)
       */
    )
  }, {
    key: "countDocumentsIn",
    value: (function () {
      var _countDocumentsIn = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(collection) {
        var filter,
          numeroDocumentos,
          _args2 = arguments;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              filter = _args2.length > 1 && _args2[1] !== undefined ? _args2[1] : {};
              _context2.prev = 1;
              _context2.next = 4;
              return collection.countDocuments(filter);
            case 4:
              numeroDocumentos = _context2.sent;
              return _context2.abrupt("return", numeroDocumentos);
            case 8:
              _context2.prev = 8;
              _context2.t0 = _context2["catch"](1);
              console.error("Error al contar documentos:", _context2.t0);
              throw _context2.t0;
            case 12:
            case "end":
              return _context2.stop();
          }
        }, _callee2, null, [[1, 8]]);
      }));
      function countDocumentsIn(_x2) {
        return _countDocumentsIn.apply(this, arguments);
      }
      return countDocumentsIn;
    }()
    /** Get all fields contained in a specific datamart
     * @param {String} collection name of the collection that you want to get all fields
    */
    )
  }, {
    key: "getProperties",
    value: (function () {
      var _getProperties = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(collection) {
        var response, doc;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              _context3.t0 = collection;
              _context3.next = _context3.t0 === "gene" ? 3 : _context3.t0 === "regulon" ? 8 : _context3.t0 === "operon" ? 13 : _context3.t0 === "srna" ? 18 : _context3.t0 === "sigmulon" ? 23 : 28;
              break;
            case 3:
              _context3.next = 5;
              return _gene_model.Gene.findOne().lean();
            case 5:
              response = _context3.sent;
              doc = JSON.parse(JSON.stringify(response));
              return _context3.abrupt("return", getDeepKeys(doc));
            case 8:
              _context3.next = 10;
              return _regulon_model.Regulon.findOne().lean();
            case 10:
              response = _context3.sent;
              doc = JSON.parse(JSON.stringify(response));
              return _context3.abrupt("return", getDeepKeys(doc));
            case 13:
              _context3.next = 15;
              return _operon_model.Operon.findOne().lean();
            case 15:
              response = _context3.sent;
              doc = JSON.parse(JSON.stringify(response));
              return _context3.abrupt("return", getDeepKeys(doc));
            case 18:
              _context3.next = 20;
              return _srna_model.SRNA.findOne().lean();
            case 20:
              response = _context3.sent;
              doc = JSON.parse(JSON.stringify(response));
              return _context3.abrupt("return", getDeepKeys(doc));
            case 23:
              _context3.next = 25;
              return _sigmulon_model.Sigmulon.findOne().lean();
            case 25:
              response = _context3.sent;
              doc = JSON.parse(JSON.stringify(response));
              return _context3.abrupt("return", getDeepKeys(doc));
            case 28:
              return _context3.abrupt("return", ["Select a valid collection from this list: gene, regulon, operon, srna, sigmulon"]);
            case 29:
            case "end":
              return _context3.stop();
          }
        }, _callee3);
      }));
      function getProperties(_x3) {
        return _getProperties.apply(this, arguments);
      }
      return getProperties;
    }())
  }]);
}();
/** Gets all keys in a object */
function getDeepKeys(obj) {
  var keys = [];
  for (var key in obj) {
    keys.push(key);
    if (_typeof(obj[key]) === "object") {
      var subkeys = getDeepKeys(obj[key]);
      keys = keys.concat(subkeys.map(function (subkey) {
        return key + "." + subkey;
      }));
    }
  }
  for (var i = 0; i < keys.length; i++) {
    keys[i] = keys[i].replace(/\.[0-9]/gm, '');
    keys[i] = keys[i].replace(/[0-9]/gm, '');
    keys[i] = keys[i].replace(/\.\./gm, '.');
    keys[i] = keys[i].replace(/\.$/gm, '');
  }
  return _toConsumableArray(new Set(keys));
}