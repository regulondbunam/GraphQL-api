import {DBInfo} from "./dbInfo_model"

class dbInfoController {
    static async getDatabaseInfo() {
        return DBInfo.find({}).sort({releaseDate:-1})
    }
}

export {dbInfoController}