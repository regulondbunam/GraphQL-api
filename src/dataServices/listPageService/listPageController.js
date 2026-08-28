import {ListPage} from "./listPageModel"

class listPageController {
    static async getObjectList(datamartType, organismId) {
        const query = {"datamartType": datamartType};
        if (organismId) {
            query.organismId = organismId;
        }
        return ListPage.find(query).sort({'name':1})
    }
}

export {listPageController}