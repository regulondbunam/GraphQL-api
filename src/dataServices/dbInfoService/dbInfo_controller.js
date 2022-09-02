import {DBInfo} from "./dbInfo_model"

class dbInfoController {
    static async getDatabaseInfo() {
        return DBInfo.find({})
    }
}

export {dbInfoController}