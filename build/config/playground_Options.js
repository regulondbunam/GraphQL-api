'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
const playgroundTabs = exports.playgroundTabs = {
  tabs: [{
    endpoint: 'graphql',
    name: 'updates',
    query: `# 10/05/2021
# Added a first version of Sigmulon Service,
# This version is for an upcoming release of RegulonDB GraphQL Web Services
# In case of error or report a bug please contact us

# Query sample usage
{
# Select query, see "docs" tab to get description about 
# parameters and description

  getSigmulonBy(search:"fliA or \\\"Sigma 70\\\""){
    data{
      _id
      sigmaFactor{
        name
        gene{
        	name
        }
    	}
      transcribedPromoters{s
        operon_id
        _id
        name
        boxes{
          leftEndPosition
          rightEndPosition
        }
      }
    }
  }
}`
  }]
};