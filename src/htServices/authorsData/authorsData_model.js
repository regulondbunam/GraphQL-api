import mongoose from 'mongoose'

const authorsDataSchema = new mongoose.Schema({
    datasetId: String, 
    tfBindingAuthorsData: String
});

const AuthorsData = mongoose.model('auhtorsData_ht', authorsDataSchema, 'authorsData');

export { AuthorsData };