import {UsedQueries} from "./recentQueriesModel"
import { ObjectID } from "mongodb";

class UsedQueriesController {
    static async getAllUsedQueries(limit, page) {
        const offset = page * limit;
        return await UsedQueries.find({}).limit(limit).sort(offset)
    }
    
    static async addUsedQuery(querySearchString) {
        var today = new Date()
        if (await UsedQueries.findOne({querySearchString:querySearchString})){
            let savedQuery = await UsedQueries.findOne({querySearchString:querySearchString})
            let updateFields = {
                $set: {
                    "dateOfUse": today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate(),
                    "usedTimes": savedQuery.usedTimes + 1
                }
            }
            const options = { upsert: true };
            await UsedQueries.updateOne({ "_id":savedQuery._id }, updateFields, options)
            return await UsedQueries.findOne({ "_id":savedQuery._id })
        } else {
            let newQuery = new UsedQueries({
                "_id": new ObjectID(),
                "querySearchString" : querySearchString,
                "dateOfUse": today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate(),
                "usedTimes": 1
            })
            return newQuery.save()
        }
    }
}

export {UsedQueriesController}
