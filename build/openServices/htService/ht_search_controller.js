"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.htController = undefined;

var _ht_search_model = require("./ht_search_model");

var _mongodbFilterObjectParser = require("mongodb-filter-object-parser");

class htController {
    static async findOnSample(advSearch, limit, page) {
        const offset = page * limit;
        const filter = (0, _mongodbFilterObjectParser.advancedSearchFilter)(advSearch);
        return _ht_search_model.HT_Samples.find(filter).limit(limit).skip(offset);
    }
}

exports.htController = htController;