import mongoose from 'mongoose';

/**  enviroment variables require */
require('dotenv').config();

/** Conecction to mongoDB with the credentials on .env file */
export const connection = mongoose.connect(
	`mongodb://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_URL}`,
	{
		useUnifiedTopology: true,
		useNewUrlParser: true
	}
);
