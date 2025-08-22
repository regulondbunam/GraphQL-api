import {UsedQueries} from "./recentQueriesModel"
import { ObjectId } from "mongodb";

class UsedQueriesController {
    static async getAllUsedQueries(limit, page) {
        const offset = page * limit;
        return await UsedQueries.find({}).limit(limit).sort(offset)
    }
    
    static async addUsedQuery(querySearchString) {
        var today = new Date()
        var dateOfUse =
            today.getFullYear() + '-' +
            String(today.getMonth() + 1).padStart(2, '0') + '-' +
            String(today.getDate()).padStart(2, '0') + ' ' +
            String(today.getHours()).padStart(2, '0') + ':' +
            String(today.getMinutes()).padStart(2, '0') + ':' +
            String(today.getSeconds()).padStart(2, '0');
        if (await UsedQueries.findOne({querySearchString:querySearchString})){
            let savedQuery = await UsedQueries.findOne({querySearchString:querySearchString})
            let updateFields = {
                $set: {
                    "dateOfUse": dateOfUse,
                    "usedTimes": savedQuery.usedTimes + 1
                }
            }
            const options = { upsert: true };
            await UsedQueries.updateOne({ "_id":savedQuery._id }, updateFields, options)
            return await UsedQueries.findOne({ "_id":savedQuery._id })
        } else {
            let newQuery = new UsedQueries({
                "_id": new ObjectId(),
                "querySearchString" : querySearchString,
                "dateOfUse": dateOfUse,
                "usedTimes": 1
            })
            return newQuery.save()
        }
    }
}

export {UsedQueriesController}
