/** import the geneController that contains the resolver functions */
import { Gene } from './gene_model';
import { geneController } from './gene_controller';
import { commonController } from '../common/controller_common_functions';

export const geneResolvers = {
	Query: {
		/** obtains an array with Genes in a range
     * @return {JSON} retrieves the result of the query
     * @param {undefined} root description will added asa
     */
		getAllGenes: (root, { limit, page }) => commonController.getAll(Gene, limit, page, 'geneInfo.name'),
		/** retrieves a list of Genes defined by it name or id in geneInfo
     * @return {JSON} retrieves the result of the query
     * @param {undefined} root description will added asa
    */
		getGenesBy: (root, { search, advancedSearch, limit, page, properties, organismName, fullMatchOnly }) =>
			geneController.getGenesBy(search, advancedSearch, limit, page, properties, organismName, fullMatchOnly)
	}
};
