"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.coexpressionController = void 0;
var _graphql = require("graphql");
var _coexpressionModel = require("./coexpressionModel");
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
      var _getTopCoexpressionRanking = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(id, gene) {
        var limit,
          err,
          _args = arguments;
        return _regenerator().w(function (_context) {
          while (1) switch (_context.n) {
            case 0:
              limit = _args.length > 2 && _args[2] !== undefined ? _args[2] : 50;
              //The value of limit must be 50 maximum, when its more it takes the default value (50)
              if (limit > 50) limit = 50;

              //When the user make a search by id, the service execute this query by gene id
              if (!(id !== undefined)) {
                _context.n = 2;
                break;
              }
              _context.n = 1;
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
            case 1:
              return _context.a(2, _context.v);
            case 2:
              if (!(gene === "")) {
                _context.n = 3;
                break;
              }
              err = new _graphql.GraphQLError('Gene must have a valid string value');
              err.statusCode = 400;
              throw err;
            case 3:
              _context.n = 4;
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
            case 4:
              return _context.a(2, _context.v);
            case 5:
              return _context.a(2);
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
      var _getRankFromGeneList = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(geneId, geneIdList, gene, geneList) {
        var err;
        return _regenerator().w(function (_context2) {
          while (1) switch (_context2.n) {
            case 0:
              if (!(geneId !== undefined && geneIdList !== undefined)) {
                _context2.n = 2;
                break;
              }
              _context2.n = 1;
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
            case 1:
              return _context2.a(2, _context2.v);
            case 2:
              if (!(gene !== undefined && geneList !== undefined)) {
                _context2.n = 4;
                break;
              }
              _context2.n = 3;
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
            case 3:
              return _context2.a(2, _context2.v);
            case 4:
              err = new _graphql.GraphQLError('Variables not defined correctly');
              err.statusCode = 400;
              throw err;
            case 5:
              return _context2.a(2);
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