import mongoose from 'mongoose';

/**  enviroment variables require */
const enviroment = require('../config-module').config();

/** Conecction to mongoDB with the credentials on .env file */
mongoose.connect(`mongodb://${enviroment.DB_USER}:${enviroment.DB_PASS}@${enviroment.DB_URL}`, {
	useUnifiedTopology: true,
	useNewUrlParser: true
});

export { mongoose };
