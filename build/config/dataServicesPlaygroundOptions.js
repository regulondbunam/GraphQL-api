"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.playgroundTabs = void 0;
var playgroundTabs = exports.playgroundTabs = {
  tabs: [{
    endpoint: 'graphql',
    name: 'updates',
    query: "# 11/06/2021\n# Added a first version of SRNA Service,\n# This version is for an upcoming release of RegulonDB GraphQL Web Services\n# In case of error or report a bug please contact us\n\n# Query sample usage\n{\n# Select query, see \"docs\" tab to get description about \n# parameters and description\n\n  getSrnaBy(search:\"dicF\"){\n    data{\n      _id\n      product{\n        name\n        gene{\n          _id\n          name\n          strand\n        }\n      }\n      regulatoryInteractions{\n        mechanism\n        regulatedEntity{\n          name\n          type\n        }\n        distanceToGene\n        regulatoryBindingSites{\n          leftEndPosition\n          rightEndPosition\n          sequence\n        }\n      }\n    }\n  }\n}"
  }]
};