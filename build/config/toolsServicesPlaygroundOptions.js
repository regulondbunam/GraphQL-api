"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.playgroundTabs = void 0;
var playgroundTabs = exports.playgroundTabs = {
  tabs: [{
    endpoint: 'graphql',
    name: 'updates',
    query: "# 11/06/2021\n# Added Regulatory Network Service,\n# This version is for an upcoming release of RegulonDB GraphQL Web Services\n# In case of error or report a bug please contact us\n\n# Query sample usage\n{\n# Select query, see \"docs\" tab to get description about \n# parameters and description\ngetNodesOf(object_name:[\"MicF\"]){\n    _id\n    name\n    type\n    indegree{\n        id\n        name\n        type\n        networkType\n        regulatoryEffect\n    }\n}\n}"
  }]
};