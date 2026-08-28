import {Organism} from "./organism_model";

class organismController {
    static async getAllOrganisms() {
        return await Organism.find({}).sort({ name: 1 });
    }
}

export {organismController}