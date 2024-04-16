"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.playgroundTabs = void 0;
var playgroundTabs = exports.playgroundTabs = {
  tabs: [{
    endpoint: 'graphql',
    name: 'updates',
    query: "# 14/01/2022\n# Now services for Datamarts and High Troughput are separated and are no\n# more dependent, if HT services are not available datamart services will start anyway\n# In case of error, report a bug or incorrect response please contact us\n\n# Query sample usage\n{\n# Select query, see \"docs\" tab to get description about \n# parameters and description\ngetDatasetByID(datasetID: \"RHTECOLIBSD00008\") {\n    _id\n    objectTested {\n      _id\n      name\n      note\n    }\n  }\n}"
  }]
};