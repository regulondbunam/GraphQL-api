"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.dbInfoController = undefined;

var _dbInfo_model = require("./dbInfo_model");

class dbInfoController {
    static async getDatabaseInfo() {
        return _dbInfo_model.DBInfo.find({});
    }
}

exports.dbInfoController = dbInfoController;