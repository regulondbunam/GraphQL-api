"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mongoose = undefined;

var _mongoose = require("mongoose");

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**  enviroment variables require */
require('dotenv').config();
/** Conecction to mongoDB with the credentials on .env file */


_mongoose2.default.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_URL}`, {
  useUnifiedTopology: true,
  useNewUrlParser: true
});

exports.mongoose = _mongoose2.default;