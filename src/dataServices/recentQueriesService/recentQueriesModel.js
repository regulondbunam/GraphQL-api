import mongoose from "mongoose";

const RecentQuery = new mongoose.Schema({
    _id: String,
    querySearchString: String,
    dateOfUse: Date,
    usedTimes: Number
})

const UsedQueries = mongoose.model('recentQueriesDM', RecentQuery, 'recentQueriesDM')

export {UsedQueries};