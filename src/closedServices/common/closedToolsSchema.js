// Import all libraries to used
import { mergeTypeDefs } from '@graphql-tools/merge';
import fs from 'fs';

//Read all graphql schemas
const Dtt = fs.readFileSync('./src/closedServices/dttService/dttSchema.graphql').toString();

const RegNet = fs.readFileSync('./src/closedServices/regulatoryNetworkService/regulatoryNetworkSchema.graphql').toString();

const commonProperties = fs.readFileSync('./src/closedServices/common/common_properties.graphql').toString();

const types = [ Dtt, RegNet, commonProperties ]

//exports the object that contains all merge schemas
export const typeDefsClosed = mergeTypeDefs(types);