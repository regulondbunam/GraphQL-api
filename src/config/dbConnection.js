// Imports to be used
import mongoose from 'mongoose';
// Enviroment variables require
require('dotenv').config();

//Connection to mongodb with .env credentials on .env file
const conectarDB = async ()=>{
    try{
        await mongoose.connect(`mongodb://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_URL}`,{
            useUnifiedTopology: true,
            useNewUrlParser: true
        }); 
    }catch(error){
        console.log(error)
        process.exit(1);
    }
}

module.exports = conectarDB;