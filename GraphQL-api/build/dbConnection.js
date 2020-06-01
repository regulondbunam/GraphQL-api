"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mongoose = undefined;

var _mongoose = require("mongoose");

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**  enviroment variables require */
const enviroment = require('../config-module').config();
/** Conecction to mongoDB with the credentials on .env file */


_mongoose2.default.connect(`mongodb://${enviroment.DB_USER}:${enviroment.DB_PASS}@${enviroment.DB_URL}`, {
  useUnifiedTopology: true,
  useNewUrlParser: true
});

exports.mongoose = _mongoose2.default;