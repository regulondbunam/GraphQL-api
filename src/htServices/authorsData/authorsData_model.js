import mongoose from 'mongoose'

const authorsDataSchema = new mongoose.Schema({
    _id: String, 
    tfBindingAuthorsData: String,
    datasetIds: [String]
});

const AuthorsData = mongoose.model('auhtorsData_ht', authorsDataSchema, 'authorsData');

export { AuthorsData };