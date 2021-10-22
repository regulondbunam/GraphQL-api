import { mergeTypes } from 'merge-graphql-schemas';
import { gql } from 'apollo-server-express';
import fs from 'fs';

/** Reading each graphql schema of all services defined and parsing to String */
const HT_Dataset = gql`
  ${fs.readFileSync('./src/htServices/htDataset/ht_dataset_schema.graphql').toString()}
`;

const HT_Peaks = gql`
  ${fs.readFileSync('./src/htServices/peaks/peaks_schema.graphql').toString()}
`;

const HT_TF_Binding = gql`
  ${fs.readFileSync('./src/htServices/tfBinding/tfBinding_schema.graphql').toString()}
`;

const AuthorsData = gql`
  ${fs.readFileSync('./src/htServices/authorsData/authorsData_schema.graphql').toString()}
`;

const commonProperties = gql`
  ${fs.readFileSync('./src/htServices/common/common_properties.graphql').toString()}
`;

/** Exports the merged Schema to the index to construct the GQL Server */
export const types = mergeTypes([HT_Dataset, commonProperties], {all: true});
