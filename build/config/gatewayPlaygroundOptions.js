'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
const playgroundTabs = exports.playgroundTabs = {
  tabs: [{
    endpoint: 'graphql',
    name: 'updates',
    query: `# 24/11/2021
# Added HT Services for dataset, peaks, tfBinding and authorsData
# In case of error, report a bug or incorrect response please contact us

# Query sample usage
{
# Select query, see "docs" tab to get description about 
# parameters and description
getDatasetByID(datasetID: "RHTECOLIBSD00008") {
    _id
    objectTested {
      _id
      name
      note
    }
  }
}`
  }]
};