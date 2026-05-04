"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.gensorUnitController = void 0;
var _gensorUnit_model = require("./gensorUnit_model");
var _mongodbFilterObjectParser = require("mongodb-filter-object-parser");
var _controller_common_functions = require("../common/controller_common_functions");
var _graphql = require("graphql");
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
# [Gensor Unit Service Controller]
	
## Description

[Defines functions to resolve GraphQL queries of Gensor Unit Services]

## Usage 

```javascript
import { gensorUnitController } from './gensorUnit_controller';
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
**/ // import { GraphQLError } from 'graphql';
var gensorUnitController = exports.gensorUnitController = /*#__PURE__*/function () {
  function gensorUnitController() {
    _classCallCheck(this, gensorUnitController);
  }
  return _createClass(gensorUnitController, null, [{
    key: "getGUsBy",
    value: (
    /** Retrieve all documents that match with a query
       *  @param {String} search usable for text search on fields defined in "Properties" parameter. **e.g.**:
       *  "arad AND arac OR \"biosynthesis of macromolecules\""
       *  @param {String} advancedSearch usable for specific query by a "value[field]" syntax
       *  @param {Number} limit defines the page results showed (10 by default)
       *  @param {Number} page select the current result page (0 by default)
       *  @param {String} properties select the fields to be queried by "search" (by default 
       *  gensorUnit[id, name])
       *  @param {String} organismName usable for specific organismName queries
       *  @param {String} fullMatchOnly define if "search" will be Case Sensitive and cannot be a substring 
       *  (by default "false")
       */
    function () {
      var _getGUsBy = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(search, advancedSearch) {
        var limit,
          page,
          properties,
          organismName,
          fullMatchOnly,
          offset,
          filter,
          hasMore,
          organismFilter,
          GensorUnits,
          total,
          lastPage,
          err,
          _args = arguments;
        return _regenerator().w(function (_context) {
          while (1) switch (_context.n) {
            case 0:
              limit = _args.length > 2 && _args[2] !== undefined ? _args[2] : 0;
              page = _args.length > 3 && _args[3] !== undefined ? _args[3] : 0;
              properties = _args.length > 4 && _args[4] !== undefined ? _args[4] : ['gensorUnit._id', 'gensorUnit.name'];
              organismName = _args.length > 5 ? _args[5] : undefined;
              fullMatchOnly = _args.length > 6 && _args[6] !== undefined ? _args[6] : false;
              offset = page * limit;
              hasMore = false;
              if (advancedSearch !== undefined) {
                filter = (0, _mongodbFilterObjectParser.advancedSearchFilter)(advancedSearch);
              } else if (search !== undefined) {
                // filter = searchFilter(search);
                filter = (0, _mongodbFilterObjectParser.textSearchFilter)(search, properties, fullMatchOnly);
              }
              if (organismName !== undefined) {
                organismName = new RegExp(organismName, 'i');
                organismFilter = {
                  $and: [{
                    'organism.organismName': organismName
                  }]
                };
                organismFilter.$and.push(filter);
                filter = organismFilter;
              }
              _context.n = 1;
              return _gensorUnit_model.GensorUnit.find(filter).sort({
                'gensorUnit.name': 1
              }).limit(limit).skip(offset);
            case 1:
              GensorUnits = _context.v;
              _context.n = 2;
              return _controller_common_functions.commonController.countDocumentsIn(_gensorUnit_model.GensorUnit, filter);
            case 2:
              total = _context.v;
              lastPage = 0;
              if (limit > 0) {
                lastPage = Math.floor(total / limit);
              }
              if (limit * (page + 1) < total) hasMore = true;
              if (!(page > lastPage)) {
                _context.n = 3;
                break;
              }
              err = new _graphql.GraphQLError('You must select an available page number');
              err.status = 'No Content';
              err.statusCode = 204;
              throw err;
            case 3:
              return _context.a(2, {
                data: GensorUnits,
                pagination: {
                  limit: limit,
                  currentPage: page,
                  firstPage: 0,
                  lastPage: lastPage || 0,
                  totalResults: total,
                  hasNextPage: hasMore
                }
              });
            case 4:
              return _context.a(2);
          }
        }, _callee);
      }));
      function getGUsBy(_x, _x2) {
        return _getGUsBy.apply(this, arguments);
      }
      return getGUsBy;
    }())
  }]);
}();
/** the gensorUnit Controller is referenced by the resolver of the Gensor Unit web service */