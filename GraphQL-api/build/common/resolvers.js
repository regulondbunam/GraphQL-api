"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.resolvers = undefined;

var _mergeGraphqlSchemas = require("merge-graphql-schemas");

var _gene_resolver = require("../geneService/gene_resolver");

var _regulon_resolver = require("../regulonService/regulon_resolver");

var _phrasesResolvers = require("../phrases/phrasesResolvers");

/** import each Resolver file */
// import { operonResolvers } from '../operonService/operon_resolver';

/** merges all resolver file and exports them to index */
const resolvers = exports.resolvers = (0, _mergeGraphqlSchemas.mergeResolvers)([_gene_resolver.geneResolvers, _phrasesResolvers.phrasesResolvers]);