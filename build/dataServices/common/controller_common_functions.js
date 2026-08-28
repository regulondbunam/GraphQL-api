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
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
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
       *  @param {String} organism specifies the organism id for which to retrieve data
       */
    function () {
      var _getAll = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(collection) {
        var limit,
          page,
          sortValue,
          organism,
          hasMore,
          response,
          offset,
          total,
          filter,
          showedResult,
          lastPage,
          err,
          _args = arguments;
        return _regenerator().w(function (_context) {
          while (1) switch (_context.n) {
            case 0:
              limit = _args.length > 1 && _args[1] !== undefined ? _args[1] : 0;
              page = _args.length > 2 && _args[2] !== undefined ? _args[2] : 0;
              sortValue = _args.length > 3 ? _args[3] : undefined;
              organism = _args.length > 4 ? _args[4] : undefined;
              // variable definitions
              hasMore = false;
              // get query response from mongodb through mongoose
              offset = page * limit; // if the limit is greater than 100, the data will not be sorted to
              // reduce the response time; if it is less than or equal to 100 the
              // data will be ordered alphabetically by sortValue
              // get another data that be in Pagination Type
              _context.n = 1;
              return this.countDocumentsIn(collection);
            case 1:
              total = _context.v;
              filter = {};
              if (organism) {
                filter = {
                  "organism._id": organism
                };
              }
              if (limit == 0) {
                limit = total;
              }
              if (!(limit > 100)) {
                _context.n = 3;
                break;
              }
              _context.n = 2;
              return collection.aggregate([{
                $match: filter
              }, {
                $limit: limit
              }, {
                $skip: offset
              }]).allowDiskUse(true);
            case 2:
              response = _context.v;
              _context.n = 5;
              break;
            case 3:
              _context.n = 4;
              return collection.find(filter).sort(sortValue).limit(limit).skip(offset);
            case 4:
              response = _context.v;
            case 5:
              showedResult = limit * (page + 1);
              lastPage = 0;
              if (limit > 0) {
                lastPage = Math.floor(total / limit);
              }
              if (showedResult < total) hasMore = true;
              if (!(page > lastPage)) {
                _context.n = 6;
                break;
              }
              err = new _graphql.GraphQLError('You must select an available page number');
              err.status = 'No Content';
              err.statusCode = 204;
              throw err;
            case 6:
              return _context.a(2, {
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
            case 7:
              return _context.a(2);
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
      var _countDocumentsIn = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(collection) {
        var filter,
          numeroDocumentos,
          _args2 = arguments,
          _t;
        return _regenerator().w(function (_context2) {
          while (1) switch (_context2.p = _context2.n) {
            case 0:
              filter = _args2.length > 1 && _args2[1] !== undefined ? _args2[1] : {};
              _context2.p = 1;
              _context2.n = 2;
              return collection.countDocuments(filter);
            case 2:
              numeroDocumentos = _context2.v;
              return _context2.a(2, numeroDocumentos);
            case 3:
              _context2.p = 3;
              _t = _context2.v;
              console.error("Error al contar documentos:", _t);
              throw _t;
            case 4:
              return _context2.a(2);
          }
        }, _callee2, null, [[1, 3]]);
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
      var _getProperties = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3(collection) {
        var response, doc, _t2;
        return _regenerator().w(function (_context3) {
          while (1) switch (_context3.n) {
            case 0:
              _t2 = collection;
              _context3.n = _t2 === "gene" ? 1 : _t2 === "regulon" ? 3 : _t2 === "operon" ? 5 : _t2 === "srna" ? 7 : _t2 === "sigmulon" ? 9 : 11;
              break;
            case 1:
              _context3.n = 2;
              return _gene_model.Gene.findOne().lean();
            case 2:
              response = _context3.v;
              doc = JSON.parse(JSON.stringify(response));
              return _context3.a(2, getDeepKeys(doc));
            case 3:
              _context3.n = 4;
              return _regulon_model.Regulon.findOne().lean();
            case 4:
              response = _context3.v;
              doc = JSON.parse(JSON.stringify(response));
              return _context3.a(2, getDeepKeys(doc));
            case 5:
              _context3.n = 6;
              return _operon_model.Operon.findOne().lean();
            case 6:
              response = _context3.v;
              doc = JSON.parse(JSON.stringify(response));
              return _context3.a(2, getDeepKeys(doc));
            case 7:
              _context3.n = 8;
              return _srna_model.SRNA.findOne().lean();
            case 8:
              response = _context3.v;
              doc = JSON.parse(JSON.stringify(response));
              return _context3.a(2, getDeepKeys(doc));
            case 9:
              _context3.n = 10;
              return _sigmulon_model.Sigmulon.findOne().lean();
            case 10:
              response = _context3.v;
              doc = JSON.parse(JSON.stringify(response));
              return _context3.a(2, getDeepKeys(doc));
            case 11:
              return _context3.a(2, ["Select a valid collection from this list: gene, regulon, operon, srna, sigmulon"]);
            case 12:
              return _context3.a(2);
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