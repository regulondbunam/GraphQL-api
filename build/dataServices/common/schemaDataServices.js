'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.typeDefs = undefined;

var _merge = require('@graphql-tools/merge');

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** Reading each graphql schema of all services defined and parsing to String */
const Gene = _fs2.default.readFileSync('./src/dataServices/geneService/gene_schema.graphql').toString();

const Regulon = _fs2.default.readFileSync('./src/dataServices/regulonService/regulon_schema.graphql').toString();

const Operon = _fs2.default.readFileSync('./src/dataServices/operonService/operon_schema.graphql').toString();

const Sigmulon = _fs2.default.readFileSync('./src/dataServices/sigmulonService/sigmulon_schema.graphql').toString();

const commonProperties = _fs2.default.readFileSync('./src/dataServices/common/common_properties.graphql').toString();

const phrases = _fs2.default.readFileSync('./src/dataServices/phrases/phrasesSchema.graphql').toString();

const Coexpression = _fs2.default.readFileSync('./src/dataServices/coexpressionService/coexpressionSchema.graphql').toString();

const Overviews = _fs2.default.readFileSync('./src/dataServices/overviewsService/overviews_schema.graphql').toString();

const SRNA = _fs2.default.readFileSync('./src/dataServices/srnaService/srna_schema.graphql').toString();

const types = [Gene, commonProperties, phrases, Operon, Regulon, Sigmulon, Coexpression, Overviews, SRNA];

/** Exports the merged Schema to the index to construct the GQL Server */
const typeDefs = exports.typeDefs = (0, _merge.mergeTypeDefs)(types);