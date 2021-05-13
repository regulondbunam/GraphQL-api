import mongoose from "mongoose";

const TemplateSchema = new mongoose.Schema({
    _id: String,
    name: String
})

const Template = mongoose.model('templateDM', TemplateSchema, 'templateDM')

export {Template};