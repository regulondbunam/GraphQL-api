'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.connection = undefined;

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**  enviroment variables require */
require('dotenv').config();

/** Conecction to mongoDB with the credentials on .env file */
const connection = exports.connection = _mongoose2.default.connect(`mongodb://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_URL}`, {
	useUnifiedTopology: true,
	useNewUrlParser: true
});