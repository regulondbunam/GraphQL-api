"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.mcoTreeController = undefined;

var _mcoTree_model = require("./mcoTree_model");

class mcoTreeController {
    static async getGoTerms() {
        return _mcoTree_model.MCOTree.find({ "subclassOf": "RDBONTOLGON00001" });
    }
    static async getSubclassesOfTermId(_id) {
        return _mcoTree_model.MCOTree.find({ subclassOf: _id });
    }
    /*static async getAllTerms(depth) {
        return result = await MCOTree.find({}, { projection: depthLimitProjection(depth) }).toArray();
    }*/
}

function depthLimitProjection(depth) {
    const projection = {};
    for (let i = 0; i <= depth; i++) {
        // Get projection for each level
        projection[`subclasses.${'subclasses.'.repeat(i)}`] = 1;
    }
    return projection;
}

exports.mcoTreeController = mcoTreeController;