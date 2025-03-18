"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.typeDefs = void 0;
var _merge = require("@graphql-tools/merge");
var _fs = _interopRequireDefault(require("fs"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
/** Reading each graphql schema of all services defined and parsing to String */
var HT_Dataset = _fs["default"].readFileSync('./src/htServices/htDataset/ht_dataset_schema.graphql').toString();
var HT_Peaks = _fs["default"].readFileSync('./src/htServices/peaks/peaks_schema.graphql').toString();
var HT_TF_Binding = _fs["default"].readFileSync('./src/htServices/tfBinding/tfBinding_schema.graphql').toString();
var AuthorsData = _fs["default"].readFileSync('./src/htServices/authorsData/authorsData_schema.graphql').toString();
var commonProperties = _fs["default"].readFileSync('./src/htServices/common/common_properties.graphql').toString();
var TranscriptionUnit = _fs["default"].readFileSync('./src/htServices/transcriptionUnit/transcriptionUnit_schema.graphql').toString();
var TranscriptionStartSite = _fs["default"].readFileSync('./src/htServices/transcriptionStartSite/tss_schema.graphql').toString();
var TranscriptionTerminationSite = _fs["default"].readFileSync('./src/htServices/transcriptionTerminationSite/tts_schema.graphql').toString();
var GeneExpression = _fs["default"].readFileSync('./src/htServices/geneExpression/geneExpression_schema.graphql').toString();
var nlpGrowthConditions = _fs["default"].readFileSync('./src/htServices/nlpGrowthConditions/nlpGrowthConditions_schema.graphql').toString();
var types = [HT_Dataset, HT_Peaks, HT_TF_Binding, AuthorsData, commonProperties, TranscriptionUnit, TranscriptionStartSite, TranscriptionTerminationSite, GeneExpression, nlpGrowthConditions];

/** Exports the merged Schema to the index to construct the GQL Server */
var typeDefs = exports.typeDefs = (0, _merge.mergeTypeDefs)(types);