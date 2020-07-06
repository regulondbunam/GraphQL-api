import { phrasesController } from './phrasesController';

export const phrasesResolvers = {
	Query: {
		getPhraseOf: (root, { id }) => phrasesController.getPhraseOf(id)
	}
};
