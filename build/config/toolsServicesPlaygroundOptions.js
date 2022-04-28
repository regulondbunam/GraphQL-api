'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
const playgroundTabs = exports.playgroundTabs = {
    tabs: [{
        endpoint: 'graphql',
        name: 'updates',
        query: `# 11/06/2021
# Added Regulatory Network Service,
# This version is for an upcoming release of RegulonDB GraphQL Web Services
# In case of error or report a bug please contact us

# Query sample usage
{
# Select query, see "docs" tab to get description about 
# parameters and description
getNodesOf(object_name:["MicF"]){
    _id
    name
    type
    indegree{
        id
        name
        type
        networkType
        regulatoryEffect
    }
}
}`
    }]
};