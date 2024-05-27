"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.typeDefs = void 0;
var _merge = require("@graphql-tools/merge");
var _fs = _interopRequireDefault(require("fs"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
/** Reading each graphql schema of all services defined and parsing to String */
var Gene = _fs["default"].readFileSync('./src/dataServices/geneService/gene_schema.graphql').toString();
var Regulon = _fs["default"].readFileSync('./src/dataServices/regulonService/regulon_schema.graphql').toString();
var Operon = _fs["default"].readFileSync('./src/dataServices/operonService/operon_schema.graphql').toString();
var Sigmulon = _fs["default"].readFileSync('./src/dataServices/sigmulonService/sigmulon_schema.graphql').toString();
var commonProperties = _fs["default"].readFileSync('./src/dataServices/common/common_properties.graphql').toString();
var phrases = _fs["default"].readFileSync('./src/dataServices/phrases/phrasesSchema.graphql').toString();
var Coexpression = _fs["default"].readFileSync('./src/dataServices/coexpressionService/coexpressionSchema.graphql').toString();
var Overviews = _fs["default"].readFileSync('./src/dataServices/overviewsService/overviews_schema.graphql').toString();
var GUs = _fs["default"].readFileSync('./src/dataServices/gensorUnit/gensorUnit_schema.graphql').toString();
var dbInfo = _fs["default"].readFileSync('./src/dataServices/dbInfoService/dbInfo_schema.graphql').toString();
var recentQueries = _fs["default"].readFileSync('./src/dataServices/recentQueriesService/recentQueriesSchema.graphql').toString();
var listPage = _fs["default"].readFileSync('./src/dataServices/listPageService/listPageSchema.graphql').toString();
var downloadableFiles = _fs["default"].readFileSync('./src/dataServices/downloadableFilesService/downloadableFiles_schema.graphql').toString();
var types = [Gene, commonProperties, phrases, Operon, Regulon, Sigmulon, Coexpression, Overviews, GUs, dbInfo, recentQueries, listPage, downloadableFiles];

/** Exports the merged Schema to the index to construct the GQL Server */
var typeDefs = exports.typeDefs = (0, _merge.mergeTypeDefs)(types);