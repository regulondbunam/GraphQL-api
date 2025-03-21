"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.coexpressionController = void 0;
var _graphql = require("graphql");
var _coexpressionModel = require("./coexpressionModel");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); } /**
 # Coexpression service controller

 ## Description
 Here are defined all functions with all logic to connect and get data from db,
 they return responses obtained to the resolvers

## Usage
```javascript
import {coexpressionController} from './coexpressionController';
```

##Arguments/parameters
N/A

## Examples
N/A

## Return 
N/A

## Category
RegulonDB Coexpression web service

## License 

## Author

**/ //import defined model of the collection to be used
var coexpressionController = exports.coexpressionController = /*#__PURE__*/function () {
  function coexpressionController() {
    _classCallCheck(this, coexpressionController);
  }
  return _createClass(coexpressionController, null, [{
    key: "getTopCoexpressionRanking",
    value: (
    /** This function return those genes expression in diferents conditions.
     *  @param {String} id id of the gene
     *  @param {String} gene name of the gene
     *  @param {Number} limit limit of the results (50 by default)
     */
    function () {
      var _getTopCoexpressionRanking = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(id, gene) {
        var limit,
          err,
          _args = arguments;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              limit = _args.length > 2 && _args[2] !== undefined ? _args[2] : 50;
              //The value of limit must be 50 maximum, when its more it takes the default value (50)
              if (limit > 50) limit = 50;

              //When the user make a search by id, the service execute this query by gene id
              if (!(id !== undefined)) {
                _context.next = 8;
                break;
              }
              _context.next = 5;
              return _coexpressionModel.CoexpressionData.find({
                "gene._id": id
              }).limit(limit).sort({
                "rank": 1
              }).exec().then(function (coexpRes) {
                for (var i = 0; i < coexpRes.length; i++) {
                  if (coexpRes[i]["gene"][0]["_id"] == id) {
                    coexpRes[i]["gene"] = coexpRes[i]["gene"][1];
                  } else {
                    coexpRes[i]["gene"] = coexpRes[i]["gene"][0];
                  }
                }
                return coexpRes;
              });
            case 5:
              return _context.abrupt("return", _context.sent);
            case 8:
              if (!(gene === "")) {
                _context.next = 14;
                break;
              }
              err = new _graphql.GraphQLError('Gene must have a valid string value');
              err.statusCode = 400;
              throw err;
            case 14:
              _context.next = 16;
              return _coexpressionModel.CoexpressionData.find({
                "gene.name": gene
              }).limit(limit).sort({
                "rank": 1
              }).exec().then(function (coexpRes) {
                for (var i = 0; i < coexpRes.length; i++) {
                  if (coexpRes[i]["gene"][0]["name"] == gene) {
                    coexpRes[i]["gene"] = coexpRes[i]["gene"][1];
                  } else {
                    coexpRes[i]["gene"] = coexpRes[i]["gene"][0];
                  }
                }
                return coexpRes;
              });
            case 16:
              return _context.abrupt("return", _context.sent);
            case 17:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }));
      function getTopCoexpressionRanking(_x, _x2) {
        return _getTopCoexpressionRanking.apply(this, arguments);
      }
      return getTopCoexpressionRanking;
    }()
    /** This function returns a list of genes compare with top 50 of principal gene
     *  @param {String} geneId ID of one of the genes to compare with principal gene top 50 in coexpression
     *  @param {String} geneIdList ID list genes of the principal gene top 50  
     *  @param {String} gene Name of one of the genes to compare with principal gene top 50 in coexpression
     *  @param {String} geneList Name list genes of the principal gene top 50
     */
    )
  }, {
    key: "getRankFromGeneList",
    value: (function () {
      var _getRankFromGeneList = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2(geneId, geneIdList, gene, geneList) {
        var err;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              if (!(geneId !== undefined && geneIdList !== undefined)) {
                _context2.next = 6;
                break;
              }
              _context2.next = 3;
              return _coexpressionModel.CoexpressionData.find({
                $and: [{
                  "gene._id": geneId
                }, {
                  "gene._id": {
                    $in: geneIdList
                  }
                }]
              }).exec().then(function (coexpRes) {
                var newList = [];
                for (var i = 0; i < coexpRes.length; i++) {
                  if (coexpRes[i]["gene"][0]["_id"] == geneId) {
                    coexpRes[i]["gene"] = coexpRes[i]["gene"][1];
                  } else {
                    coexpRes[i]["gene"] = coexpRes[i]["gene"][0];
                  }
                }
                for (var _i = 0; _i < geneIdList.length; _i++) {
                  for (var j = 0; j < coexpRes.length; j++) {
                    if (coexpRes[j]["gene"][0]["_id"] == geneIdList[_i]) {
                      newList.push(coexpRes[j]);
                    }
                  }
                }
                return newList;
              });
            case 3:
              return _context2.abrupt("return", _context2.sent);
            case 6:
              if (!(gene !== undefined && geneList !== undefined)) {
                _context2.next = 12;
                break;
              }
              _context2.next = 9;
              return _coexpressionModel.CoexpressionData.find({
                $and: [{
                  "gene.name": gene
                }, {
                  "gene.name": {
                    $in: geneList
                  }
                }]
              }).exec().then(function (coexpRes) {
                var newList = [];
                for (var i = 0; i < coexpRes.length; i++) {
                  if (coexpRes[i]["gene"][0]["name"] == gene) {
                    coexpRes[i]["gene"] = coexpRes[i]["gene"][1];
                  } else {
                    coexpRes[i]["gene"] = coexpRes[i]["gene"][0];
                  }
                }
                for (var _i2 = 0; _i2 < geneList.length; _i2++) {
                  for (var j = 0; j < coexpRes.length; j++) {
                    if (coexpRes[j]["gene"][0]["name"] == geneList[_i2]) {
                      newList.push(coexpRes[j]);
                    }
                  }
                }
                return newList;
              });
            case 9:
              return _context2.abrupt("return", _context2.sent);
            case 12:
              err = new _graphql.GraphQLError('Variables not defined correctly');
              err.statusCode = 400;
              throw err;
            case 15:
            case "end":
              return _context2.stop();
          }
        }, _callee2);
      }));
      function getRankFromGeneList(_x3, _x4, _x5, _x6) {
        return _getRankFromGeneList.apply(this, arguments);
      }
      return getRankFromGeneList;
    }())
  }]);
}();