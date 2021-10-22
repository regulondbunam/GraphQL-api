export const playgroundTabs = {
    tabs: [
      {
        endpoint: 'graphql',
        name: 'updates',
        query: `# 20/10/2021
# Added a first version of HT Services,
# This version is for an upcoming release of RegulonDB GraphQL Web Services
# In case of error or report a bug please contact us

# Query sample usage
{
# Select query, see "docs" tab to get description about 
# parameters and description
getDatasetsFromSearch(advancedSearch:"")
    {
        datasetID
        objectTested {
            _id
            name
            summary
        }
    }
}`,
      },
    ],
  };
  