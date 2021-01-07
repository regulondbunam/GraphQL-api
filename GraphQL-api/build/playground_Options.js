"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
const playgroundTabs = exports.playgroundTabs = {
  tabs: [{
    endpoint: 'graphql',
    name: 'updates',
    query: `# 07/01/2021
# Added a first version of Operon Service using v0.1, 
# Operon MongoDB colection isn't complete, the following 
# root fields can be queried:
# allCitations -> except publication
# operon -> except citations
# organism
# transcription units -> only genes, citations(evidence), id

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