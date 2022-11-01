'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
const playgroundTabs = exports.playgroundTabs = {
    tabs: [{
        endpoint: 'graphql',
        name: 'updates',
        query: `# 06/12/2021
# Added a first version of GeneExpression HT Services,
# This version is for an upcoming release of RegulonDB GraphQL Web Services
# In case of error or report a bug please contact us

# Query sample usage
{
# Select query, see "docs" tab to get description about 
# parameters and description
getDatasetsFromSearch(advancedSearch:"")
    {
        _id
        objectsTested {
            _id
            name
            note
        }
        publications {
            authors
            title
        }
    }
}`
    }]
};