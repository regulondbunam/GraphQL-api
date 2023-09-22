import mongoose from "mongoose";

const DownloadableFilesSchema = new mongoose.Schema({
    _id: String,
    title: String,
    fileName: String,
    fileFormat: String,
    license: String,
    citation: String,
    contact: {
        person: String,
        webPage: String,
        email: String
    },
    version: String,
    creationDate: String,
    columnsDetails: String,
    content: String
})

const DownloadableFiles = mongoose.model('downloadableFilesDatamart', DownloadableFilesSchema, 'downloadableFilesDatamart')

export {DownloadableFiles};