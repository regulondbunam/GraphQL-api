"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.phrasesController = void 0;
var _phrasesModel = require("./phrasesModel");
var _gene_model = require("../geneService/gene_model");
var _operon_model = require("../operonService/operon_model");
var _regulon_model = require("../regulonService/regulon_model");
var _sigmulon_model = require("../sigmulonService/sigmulon_model");
var _srna_model = require("../srnaService/srna_model");
var _lodash = require("lodash");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); } /**
# [Phrases Service Controller]
	
## Description

[Defines functions to resolve GraphQL queries of Phrases Service]

## Usage 

```javascript
import {phrasesController} from './phrasesController';
```

## Arguments/Parameters

N/A

## Examples

N/A

## Return 

N/A

## Category

RegulonDB datamart web service

## License

MIT License

## Author 

RegulonDB Team: Lopez Almazo Andres Gerardo
**/
var phrasesController = exports.phrasesController = /*#__PURE__*/function () {
  function phrasesController() {
    _classCallCheck(this, phrasesController);
  }
  return _createClass(phrasesController, null, [{
    key: "getPhraseOf",
    value: (
    /** Retrieve all phrases for an specified Id
       *  @param {String} objectId Tells to function the id of the Gene to get phrases
       */
    function () {
      var _getPhraseOf = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(objectId) {
        var foundPhrases;
        return _regenerator().w(function (_context) {
          while (1) switch (_context.n) {
            case 0:
              foundPhrases = _phrasesModel.phrases.find({
                _id: objectId
              });
              _context.n = 1;
              return foundPhrases;
            case 1:
              return _context.a(2, _context.v);
          }
        }, _callee);
      }));
      function getPhraseOf(_x) {
        return _getPhraseOf.apply(this, arguments);
      }
      return getPhraseOf;
    }()
    /** Retrieve associated phrases to all ids contained in a object
       *  @param {String} objectId Tells to function the id of the object to get phrases
       */
    )
  }, {
    key: "getAllPhrasesInObject",
    value: (function () {
      var _getAllPhrasesInObject = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(objectId) {
        var ids;
        return _regenerator().w(function (_context2) {
          while (1) switch (_context2.n) {
            case 0:
              ids = [];
              if (!/^RDBECOLIGNC[0-9A-Z]{5}$/.test(objectId)) {
                _context2.n = 2;
                break;
              }
              _context2.n = 1;
              return getAllAssociatedPhrases(_gene_model.Gene, objectId);
            case 1:
              ids = _context2.v;
            case 2:
              if (!/^RDBECOLITFC[0-9A-Z]{5}$/.test(objectId)) {
                _context2.n = 4;
                break;
              }
              _context2.n = 3;
              return getAllAssociatedPhrases(_regulon_model.Regulon, objectId);
            case 3:
              ids = _context2.v;
            case 4:
              if (!/^RDBECOLIOPC[0-9A-Z]{5}$/.test(objectId)) {
                _context2.n = 6;
                break;
              }
              _context2.n = 5;
              return getAllAssociatedPhrases(_operon_model.Operon, objectId);
            case 5:
              ids = _context2.v;
            case 6:
              if (!/^RDBECOLISFC[0-9A-Z]{5}$/.test(objectId)) {
                _context2.n = 8;
                break;
              }
              _context2.n = 7;
              return getAllAssociatedPhrases(_sigmulon_model.Sigmulon, objectId);
            case 7:
              ids = _context2.v;
            case 8:
              if (!/^RDBECOLIPDC[0-9A-Z]{5}$/.test(objectId)) {
                _context2.n = 10;
                break;
              }
              _context2.n = 9;
              return getAllAssociatedPhrases(_srna_model.SRNA, objectId);
            case 9:
              ids = _context2.v;
            case 10:
              return _context2.a(2, _phrasesModel.phrases.find({
                _id: ids
              }));
          }
        }, _callee2);
      }));
      function getAllPhrasesInObject(_x2) {
        return _getAllPhrasesInObject.apply(this, arguments);
      }
      return getAllPhrasesInObject;
    }())
  }]);
}();
function getAllAssociatedPhrases(collection, objectId) {
  return collection.findOne({
    _id: objectId
  }).exec().then(function (item) {
    var values = JSON.stringify(item.toJSON()).match(/RDB[A-Z0-9_]{5}[A-Z]{3}[0-9A-Z]{5}/g);
    values = values.filter(function (item, index) {
      return values.indexOf(item) === index;
    });
    return values;
  });
}