export const playgroundTabs = {
    tabs: [
      {
        endpoint: 'graphql',
        name: 'updates',
        query: `# 14/01/2022
# Now services for Datamarts and High Troughput are separated and are no
# more dependent, if HT services are not available datamart services will start anyway
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
}`,
    },
    ],
};
  