"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
const playgroundTabs = exports.playgroundTabs = {
  tabs: [{
    endpoint: 'graphql',
    name: 'updates',
    query: `# 08/09/2020
# graphql gene schema has changed to v0.2 some fields have 
# been updated
## geneInfo is no longer available now its name is gene
# Query sample usage
{
# Select query, see \"docs\" tab to get description about 
# parameters and description
getGenesBy(search:"arac"){
    data{
        # fields to show
    }
    pagination{
        # fields to show
    }
}
}`
  }]
};