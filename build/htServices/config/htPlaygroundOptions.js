"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.playgroundTabs = void 0;
var playgroundTabs = exports.playgroundTabs = {
  tabs: [{
    endpoint: 'graphql',
    name: 'updates',
    query: "# 06/12/2021\n# Added a first version of GeneExpression HT Services,\n# This version is for an upcoming release of RegulonDB GraphQL Web Services\n# In case of error or report a bug please contact us\n\n# Query sample usage\n{\n# Select query, see \"docs\" tab to get description about \n# parameters and description\ngetDatasetsFromSearch(advancedSearch:\"\")\n    {\n        _id\n        objectsTested {\n            _id\n            name\n            note\n        }\n        publications {\n            authors\n            title\n        }\n    }\n}"
  }]
};