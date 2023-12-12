// Import all libraries to used
import { mergeTypeDefs } from '@graphql-tools/merge';
import fs from 'fs';

//Read all graphql schemas
const Dtt = fs.readFileSync('./src/toolsServices/dttService/dttSchema.graphql').toString();

const RegNet = fs.readFileSync('./src/toolsServices/regulatoryNetworkService/regulatoryNetworkSchema.graphql').toString();

const termTree = fs.readFileSync('./src/toolsServices/mcoTreeService/mcoTree_schema.graphql').toString();

const commonProperties = fs.readFileSync('./src/toolsServices/common/common_properties.graphql').toString();

const types = [ Dtt, RegNet, termTree, commonProperties ]

//exports the object that contains all merge schemas
export const typeDefsClosed = mergeTypeDefs(types);