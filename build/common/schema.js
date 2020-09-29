'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.typeDefs = undefined;

var _mergeGraphqlSchemas = require('merge-graphql-schemas');

var _apolloServerExpress = require('apollo-server-express');

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//Leyendo el schema de GraphQL
const example = _apolloServerExpress.gql`${_fs2.default.readFileSync('./src/exampleService/exampleSchema.graphql').toString()}`;

//exportando el objeto que contiene los schemas fusionados
/**
# name: schema.js version: 1.0

## synopsis

```javascript

import {typeDefs} from './schema'

```

## description
Este archivo fusiona los archivos schema con extensión .graphql definidos y es 
utilizado en la definición del servidor de GraphQL para levantar la API

## arguments
No aplica

## code

**/

//importación de bibliotecas a usar
const typeDefs = exports.typeDefs = (0, _mergeGraphqlSchemas.mergeTypes)([example], { all: true });