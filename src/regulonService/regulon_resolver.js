/** import the regulonController that contains the resolver functions */
import {Regulon} from './regulon_model';
import {regulonController} from './gene_controller';
import {commonController} from '../common/controller_common_functions';

export const geneResolvers = {
  Query: {
    /** obtains an array with regulon docs
     * @return {JSON} retrieves the result of the query
     * @param {undefined} root description will added asa
     */
    getAllRegulon: (root, {limit, page}) =>
      commonController.getAll(Regulon, limit, page),
    /** retrieves a list of Regulon docs defined by an advancedSearch string
     * @return {JSON} retrieves the result of the query
     * @param {undefined} root description will added asa
    */
    getRegulonBy: (root, {search, advancedSearch, limit, page}) =>
      regulonController.getRegulonBy(search, advancedSearch, limit, page),
  },
};
