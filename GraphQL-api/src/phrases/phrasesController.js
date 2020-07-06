import { phrases } from './phrasesModel';

class phrasesController {
	static getPhraseOf(id) {
		const foundPhrases = phrases.find({ objectId: id });
		return foundPhrases;
	}
}

export { phrasesController };
