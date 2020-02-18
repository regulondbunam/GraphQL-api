import { gql } from 'apollo-server-express';

const typeDefs = gql`
	type Query {
		gene: String
	}
`;

export default typeDefs;
