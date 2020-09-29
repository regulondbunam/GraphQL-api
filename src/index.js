/**
# name: index.js version: 1.0

## synopsis

```shell
    npm start 
```

## description
Configures GraphQL server

## arguments
NA

* __Return:__
NA

## code

**/

// import needed libraries
import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { typeDefs } from './common/schema';
import { resolvers } from './common/resolvers';
import rateLimit from 'express-rate-limit';
// make connection to MongoDB
// import connection from './dbConnection';

// Defining GraphQL server
const server = new ApolloServer({
	playground: true,
	typeDefs,
	resolvers
});

// Create an instance of express to be used with ApolloServer
const app = express();

// set up the ApolloServer with an express middleware
const apiLimiter = rateLimit({
	windowMs: 60000,
	max: 1000,
	message: {
		message: 'Too many requests',
		statusCode: '429'
	}
});
app.use(apiLimiter);

// Apply Cors and Express instance to ApolloServer
server.applyMiddleware({
	app,
	cors: {
		origin: '*'
	}
});

// when server start
const servExpress = app.listen(4000, () =>
	console.log(`Server is available in http://localhost:${servExpress.address().port}${server.graphqlPath}`)
);
