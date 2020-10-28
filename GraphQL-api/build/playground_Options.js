"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
const playgroundTabs = exports.playgroundTabs = {
  tabs: [{
    endpoint: 'graphql',
    name: 'updates',
    query: `# 13/10/2020
# graphql gene schema has changed to v0.3 some fields have 
# been updated
## publications has been updated with authors, title, year fields
# Query sample usage
{
# Select query, see \"docs\" tab to get description about 
# parameters and description
getGenesBy(search:"arac"){
    data{
        # fields to show
        gene{
          id
          name
        }
    }
    pagination{
        # fields to show
        totalResults
    }
}
}`
  }]
};