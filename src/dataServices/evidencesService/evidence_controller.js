import { EvidencesDatamart } from './evidence_model';
import { GraphQLError } from 'graphql';

class evidencesController {
    static async getAllEvidences() {
        return EvidencesDatamart.find()
    }
}

export { evidencesController };