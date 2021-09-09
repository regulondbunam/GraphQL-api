// Import all libraries to used
import {mergeTypes} from 'merge-graphql-schemas';
import {gql} from 'apollo-server-express';
import fs from 'fs';

//Read all graphql schemas
const Dtt = gql `${fs.readFileSync('./src/closedServices/dttService/dttSchema.graphql').toString()}`;

const RegNet = gql `${fs.readFileSync('./src/closedServices/regulatoryNetworkService/regulatoryNetworkSchema.graphql').toString()}`;

const commonProperties = gql`${fs.readFileSync('./src/closedServices/common/common_properties.graphql').toString()}`;

//exports the object that contains all merge schemas
export const typeDefsClosed = mergeTypes([Dtt, RegNet, commonProperties],{all: true});