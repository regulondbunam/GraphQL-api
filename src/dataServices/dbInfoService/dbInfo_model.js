import mongoose from "mongoose";

const localDataSchema = new mongoose.Schema({
    type: String,
    sourceName: String,
    version: String,
    note: String,
    responsible: [String]
});

const dbInfoSchema = new mongoose.Schema({
    regulondbVersion: String,
    ecocycVersion: String,
    lcVersion: String,
    releaseDate: String,
    note: String,
    genomeVersion: String,
    localData: [localDataSchema]
});

const DBInfo = mongoose.model('dbInfo', dbInfoSchema, 'databaseInfo');

export {DBInfo};