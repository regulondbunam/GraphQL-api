"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UsedQueriesController = void 0;
var _recentQueriesModel = require("./recentQueriesModel");
var _mongodb = require("mongodb");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var UsedQueriesController = exports.UsedQueriesController = /*#__PURE__*/function () {
  function UsedQueriesController() {
    _classCallCheck(this, UsedQueriesController);
  }
  return _createClass(UsedQueriesController, null, [{
    key: "getAllUsedQueries",
    value: function () {
      var _getAllUsedQueries = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(limit, page) {
        var offset;
        return _regenerator().w(function (_context) {
          while (1) switch (_context.n) {
            case 0:
              offset = page * limit;
              _context.n = 1;
              return _recentQueriesModel.UsedQueries.find({}).limit(limit).sort(offset);
            case 1:
              return _context.a(2, _context.v);
          }
        }, _callee);
      }));
      function getAllUsedQueries(_x, _x2) {
        return _getAllUsedQueries.apply(this, arguments);
      }
      return getAllUsedQueries;
    }()
  }, {
    key: "addUsedQuery",
    value: function () {
      var _addUsedQuery = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(querySearchString) {
        var today, dateOfUse, savedQuery, updateFields, options, newQuery;
        return _regenerator().w(function (_context2) {
          while (1) switch (_context2.n) {
            case 0:
              today = new Date();
              dateOfUse = today.getFullYear() + '-' + String(today.getMonth() + 1).padStart(2, '0') + '-' + String(today.getDate()).padStart(2, '0') + ' ' + String(today.getHours()).padStart(2, '0') + ':' + String(today.getMinutes()).padStart(2, '0') + ':' + String(today.getSeconds()).padStart(2, '0');
              _context2.n = 1;
              return _recentQueriesModel.UsedQueries.findOne({
                querySearchString: querySearchString
              });
            case 1:
              if (!_context2.v) {
                _context2.n = 5;
                break;
              }
              _context2.n = 2;
              return _recentQueriesModel.UsedQueries.findOne({
                querySearchString: querySearchString
              });
            case 2:
              savedQuery = _context2.v;
              updateFields = {
                $set: {
                  "dateOfUse": dateOfUse,
                  "usedTimes": savedQuery.usedTimes + 1
                }
              };
              options = {
                upsert: true
              };
              _context2.n = 3;
              return _recentQueriesModel.UsedQueries.updateOne({
                "_id": savedQuery._id
              }, updateFields, options);
            case 3:
              _context2.n = 4;
              return _recentQueriesModel.UsedQueries.findOne({
                "_id": savedQuery._id
              });
            case 4:
              return _context2.a(2, _context2.v);
            case 5:
              newQuery = new _recentQueriesModel.UsedQueries({
                "_id": new _mongodb.ObjectId(),
                "querySearchString": querySearchString,
                "dateOfUse": dateOfUse,
                "usedTimes": 1
              });
              return _context2.a(2, newQuery.save());
            case 6:
              return _context2.a(2);
          }
        }, _callee2);
      }));
      function addUsedQuery(_x3) {
        return _addUsedQuery.apply(this, arguments);
      }
      return addUsedQuery;
    }()
  }]);
}();