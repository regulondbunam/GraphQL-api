"use strict";

const {
  geneResponse
} = require('./geneService/geneResponse');

const {
  jsonToSchema
} = require('@walmartlabs/json-to-simple-graphql-schema/lib');

const fs = require('fs');

const geneSchema = jsonToSchema({
  jsonInput: JSON.stringify(geneResponse)
});
fs.writeFile('./src/geneService/generatedGeneSchema.graphql', geneSchema.value, function (err) {
  if (err) return console.log(err);
  console.log('Gene Schema generated');
});