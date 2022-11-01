"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.UsedQueriesController = undefined;

var _recentQueriesModel = require("./recentQueriesModel");

var _mongodb = require("mongodb");

class UsedQueriesController {
    static async getAllUsedQueries(limit, page) {
        const offset = page * limit;
        return await _recentQueriesModel.UsedQueries.find({}).limit(limit).sort(offset);
    }

    static async addUsedQuery(querySearchString) {
        var today = new Date();
        if (await _recentQueriesModel.UsedQueries.findOne({ querySearchString: querySearchString })) {
            let savedQuery = await _recentQueriesModel.UsedQueries.findOne({ querySearchString: querySearchString });
            let updateFields = {
                $set: {
                    "dateOfUse": today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate(),
                    "usedTimes": savedQuery.usedTimes + 1
                }
            };
            const options = { upsert: true };
            await _recentQueriesModel.UsedQueries.updateOne({ "_id": savedQuery._id }, updateFields, options);
            return await _recentQueriesModel.UsedQueries.findOne({ "_id": savedQuery._id });
        } else {
            let newQuery = new _recentQueriesModel.UsedQueries({
                "_id": new _mongodb.ObjectID(),
                "querySearchString": querySearchString,
                "dateOfUse": today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate(),
                "usedTimes": 1
            });
            return newQuery.save();
        }
    }
}

exports.UsedQueriesController = UsedQueriesController;