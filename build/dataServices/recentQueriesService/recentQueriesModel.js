'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.UsedQueries = undefined;

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const RecentQuery = new _mongoose2.default.Schema({
    _id: String,
    querySearchString: String,
    dateOfUse: Date,
    usedTimes: Number
});

const UsedQueries = _mongoose2.default.model('recentQueriesDM', RecentQuery, 'recentQueriesDM');

exports.UsedQueries = UsedQueries;