import mongoose from 'mongoose'

const authorsDataSchema = new mongoose.Schema({
    _id: String, 
    authorsData: String,
    datasetIds: [String]
});

const AuthorsData = mongoose.model('authorsData_ht', authorsDataSchema, 'authorsData');

export { AuthorsData };