import { evidencesController } from './evidence_controller';

export const evidencesDatamartResolvers = {
  Query: {
    getAllEvidences: (root, {}) => evidencesController.getAllEvidences(),
  },
};