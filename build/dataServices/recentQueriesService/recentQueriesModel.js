"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UsedQueries = void 0;
var _mongoose = _interopRequireDefault(require("mongoose"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var RecentQuery = new _mongoose["default"].Schema({
  _id: String,
  querySearchString: String,
  dateOfUse: Date,
  usedTimes: Number
});
var UsedQueries = exports.UsedQueries = _mongoose["default"].model('recentQueriesDM', RecentQuery, 'recentQueriesDM');