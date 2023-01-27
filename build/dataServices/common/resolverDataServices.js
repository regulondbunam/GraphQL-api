'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.resolvers = undefined;

var _merge = require('@graphql-tools/merge');

var _gene_resolver = require('../geneService/gene_resolver');

var _operon_resolver = require('../operonService/operon_resolver');

var _phrasesResolvers = require('../phrases/phrasesResolvers');

var _coexpressionResolver = require('../coexpressionService/coexpressionResolver');

var _overviews_resolver = require('../overviewsService/overviews_resolver');

var _regulon_resolver = require('../regulonService/regulon_resolver');

var _sigmulon_resolver = require('../sigmulonService/sigmulon_resolver');

var _srna_resolver = require('../srnaService/srna_resolver');

var _gensorUnit_resolver = require('../gensorUnit/gensorUnit_resolver');

var _dbInfo_resolver = require('../dbInfoService/dbInfo_resolver');

var _recentQueriesResolver = require('../recentQueriesService/recentQueriesResolver');

var _listPageResolver = require('../listPageService/listPageResolver');

/** merges all resolver file and exports them to index */

/** import each Resolver file */
const resolvers = exports.resolvers = (0, _merge.mergeResolvers)([_gene_resolver.geneResolvers, _phrasesResolvers.phrasesResolvers, _operon_resolver.operonResolvers, _coexpressionResolver.coexpressionResolver, _overviews_resolver.overviewsResolver, _regulon_resolver.regulonResolvers, _sigmulon_resolver.sigmulonResolvers, _srna_resolver.srnaResolvers, _gensorUnit_resolver.gensorUnitResolvers, _dbInfo_resolver.dbInfoResolvers, _recentQueriesResolver.recentUsedQueriesResolver, _listPageResolver.listPageResolver]);
//import { regulonResolvers } from '../regulonService/regulon_resolver';