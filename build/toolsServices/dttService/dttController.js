"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dttController = void 0;
var _dttModel = require("./dttModel");
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
 # Drawing Traces Tool service controller

 ## Description
 Here are defined all functions with all logic to connect and get data from db,
 they return responses obtained to the resolvers

## Usage
```javascript
import {dttController} from './dttController';
```

##Arguments/parameters
N/A

## Examples
N/A

## Return 
N/A

## Category
RegulonDB drawing traces tool web service

## License 

## Author

 **/ // import defined model of the collection to be used
var dttController = exports.dttController = /*#__PURE__*/function () {
  function dttController() {
    _classCallCheck(this, dttController);
  }
  return _createClass(dttController, null, [{
    key: "getGeneticElementsFromInterval",
    value: (
    /** This function return all genetic elements from an interval of position (left and right)
     *  also strand, and the object type of the elements.
     *  @param {Number} leftEndPosition beginning of element position to draw
     *  @param {Number} rightEndPosition ending of element position to draw
     *  @param {String} strand direction of the element (forward, reverse, both)
     *  @param {String} objectType type of the genetic element to draw 
     *  @param {String} covered indicate elements that are completely contained in the selected range(true)
     */
    function () {
      var _getGeneticElementsFromInterval = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(leftEndPosition, rightEndPosition) {
        var strand,
          objectType,
          covered,
          err,
          _args = arguments;
        return _regenerator().w(function (_context) {
          while (1) switch (_context.n) {
            case 0:
              strand = _args.length > 2 && _args[2] !== undefined ? _args[2] : 'both';
              objectType = _args.length > 3 && _args[3] !== undefined ? _args[3] : 'all';
              covered = _args.length > 4 && _args[4] !== undefined ? _args[4] : false;
              if (!(leftEndPosition > rightEndPosition)) {
                _context.n = 1;
                break;
              }
              err = new _graphql.GraphQLError('leftEndPosition must be lower than rightEndPosition');
              err.statusCode = 400;
              throw err;
            case 1:
              //When objectType is not defined by the user takes all values by default
              if (objectType == 'all') objectType = ['gene',
              //Ready
              'promoter',
              //Ready
              'operon',
              // For Second Phase with transcription_unit
              'tf_binding_site',
              //Ready
              'translational_tf_binding_site',
              //Ready
              'srna',
              //Ready
              'riboswitch', 'terminator',
              //Ready
              'translational_attenuator', 'transcriptional_attenuator', 'ppGpp' //Ready
              ];
              // When covered is true means draw only the elements that are contained in the selected range
              if (!covered) {
                _context.n = 3;
                break;
              }
              // When strand is "forward" OR "reverse"
              if (strand == 'both') strand = ["forward", "reverse"];
              // Return the elements that are completely contained in the selected range
              _context.n = 2;
              return _dttModel.Data.find({
                $and: [{
                  $or: [{
                    leftEndPosition: {
                      $gte: leftEndPosition
                    }
                  }, {
                    "linkedObjectWhenNoPositions.leftEndPosition": {
                      $gte: leftEndPosition
                    }
                  }]
                }, {
                  $or: [{
                    rightEndPosition: {
                      $lte: rightEndPosition
                    }
                  }, {
                    "linkedObjectWhenNoPositions.rightEndPosition": {
                      $lte: rightEndPosition
                    }
                  }]
                }, {
                  $or: [{
                    strand: strand
                  }, {
                    strand: {
                      $exists: false
                    }
                  }]
                }, {
                  objectType: {
                    $in: objectType
                  }
                }]
              });
            case 2:
              return _context.a(2, _context.v);
            case 3:
              //When strand is "forward" OR "reverse"
              if (strand == 'both') strand = ["forward", "reverse"];
              // Return all elements that are contained in the selected range.
              _context.n = 4;
              return _dttModel.Data.find({
                $and: [{
                  $or: [{
                    $and: [{
                      leftEndPosition: {
                        $gte: leftEndPosition
                      }
                    }, {
                      rightEndPosition: {
                        $lte: rightEndPosition
                      }
                    }]
                  },
                  // Return those elements start outside the selected range but finish inside the range.
                  {
                    $and: [{
                      leftEndPosition: {
                        $lt: leftEndPosition
                      }
                    }, {
                      rightEndPosition: {
                        $gt: leftEndPosition,
                        $lte: rightEndPosition
                      }
                    }]
                  },
                  // Return those elements start inside the selected range but finish outside the range.
                  {
                    $and: [{
                      leftEndPosition: {
                        $gte: leftEndPosition,
                        $lte: rightEndPosition
                      }
                    }, {
                      rightEndPosition: {
                        $gt: rightEndPosition
                      }
                    }]
                  },
                  // Return those elements that start and finish outside the range
                  {
                    $and: [{
                      leftEndPosition: {
                        $lte: leftEndPosition
                      }
                    }, {
                      rightEndPosition: {
                        $gte: rightEndPosition
                      }
                    }]
                  },
                  // Test for object when positions aren't defined, search in relatedObjects..
                  {
                    $and: [{
                      "linkedObjectWhenNoPositions.leftEndPosition": {
                        $gte: leftEndPosition
                      }
                    }, {
                      "linkedObjectWhenNoPositions.rightEndPosition": {
                        $lte: rightEndPosition
                      }
                    }]
                  },
                  // Return those elements start outside the selected range but finish inside the range.
                  {
                    $and: [{
                      "linkedObjectWhenNoPositions.leftEndPosition": {
                        $lt: leftEndPosition
                      }
                    }, {
                      "linkedObjectWhenNoPositions.rightEndPosition": {
                        $gt: leftEndPosition,
                        $lte: rightEndPosition
                      }
                    }]
                  },
                  // Return those elements start inside the selected range but finish outside the range.
                  {
                    $and: [{
                      "linkedObjectWhenNoPositions.leftEndPosition": {
                        $gte: leftEndPosition,
                        $lte: rightEndPosition
                      }
                    }, {
                      "linkedObjectWhenNoPositions.rightEndPosition": {
                        $gt: rightEndPosition
                      }
                    }]
                  },
                  // Return those elements that start and finish outside the range
                  {
                    $and: [{
                      "linkedObjectWhenNoPositions.leftEndPosition": {
                        $lte: leftEndPosition
                      }
                    }, {
                      "linkedObjectWhenNoPositions.rightEndPosition": {
                        $gte: rightEndPosition
                      }
                    }]
                  }]
                }, {
                  $or: [{
                    strand: strand
                  }, {
                    strand: {
                      $exists: false
                    }
                  }]
                }, {
                  objectType: {
                    $in: objectType
                  }
                }]
              }).exec().
              // This function add to the position of the element a character "+" wich means if the position is outside the range
              then(function (dtt_response) {
                var dtt_obj_extracted;
                for (var i = 0; i < dtt_response.length; i++) {
                  dtt_obj_extracted = dtt_response[i].toJSON();
                  if (dtt_obj_extracted.leftEndPosition != null && dtt_obj_extracted.leftEndPosition < leftEndPosition) dtt_obj_extracted.leftEndPosition = "+" + dtt_obj_extracted.leftEndPosition;
                  if (dtt_obj_extracted.rightEndPosition != null && dtt_obj_extracted.rightEndPosition > rightEndPosition) dtt_obj_extracted.rightEndPosition += "+";
                  dtt_response[i] = dtt_obj_extracted;
                }
                return dtt_response;
              });
            case 4:
              return _context.a(2, _context.v);
            case 5:
              return _context.a(2);
          }
        }, _callee);
      }));
      function getGeneticElementsFromInterval(_x, _x2) {
        return _getGeneticElementsFromInterval.apply(this, arguments);
      }
      return getGeneticElementsFromInterval;
    }())
  }]);
}();