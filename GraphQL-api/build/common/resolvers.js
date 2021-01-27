"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.resolvers = undefined;

var _mergeGraphqlSchemas = require("merge-graphql-schemas");

var _gene_resolver = require("../geneService/gene_resolver");

var _operon_resolver = require("../operonService/operon_resolver");

var _phrasesResolvers = require("../phrases/phrasesResolvers");

/** import each Resolver file */
//import { regulonResolvers } from '../regulonService/regulon_resolver';

/** merges all resolver file and exports them to index */
const resolvers = exports.resolvers = (0, _mergeGraphqlSchemas.mergeResolvers)([_gene_resolver.geneResolvers, _phrasesResolvers.phrasesResolvers, _operon_resolver.operonResolvers]);