//importación de bibliotecas a usar
import { mergeTypes } from 'merge-graphql-schemas';
import { gql } from 'apollo-server-express';
import fs from 'fs';

//Leyendo el schema de GraphQL
const example = gql`${fs.readFileSync('./src/exampleService/exampleSchema.graphql').toString()}`;

//exportando el objeto que contiene los schemas fusionados
export const typeDefs = mergeTypes([ example ], { all: true });
