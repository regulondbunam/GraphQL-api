"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.listPageController = undefined;

var _listPageModel = require("./listPageModel");

class listPageController {
    static async getObjectList(datamartType) {
        return _listPageModel.ListPage.find({ "datamartType": datamartType }).sort({ 'name': 1 });
    }
}

exports.listPageController = listPageController;