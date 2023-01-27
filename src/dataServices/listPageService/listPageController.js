import {ListPage} from "./listPageModel"

class listPageController {
    static async getPageList(datamartType) {
        return ListPage.find({"datamartType":datamartType}).sort({'name':1})
    }
}

export {listPageController}