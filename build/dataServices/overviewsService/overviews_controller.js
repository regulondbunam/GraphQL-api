"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.overviewsController = undefined;

var _overviews_model = require("./overviews_model");

class overviewsController {
    /** Realiza la busqueda de todos los elementos que se encuentren en el modelo de Overviews */
    static async getAllObjectInfo() {
        return await _overviews_model.Overviews.find({});
    }

    /** Realiza la busqueda de un elemento en especifico que se encuentre en el modelo de Overviews */
    static async getOverview(_id) {
        return await _overviews_model.Overviews.findOne({ "_id": _id });
    }
} /**
  # Overviews Controller
  	
  ## Description
  
  Se encarga de realizar las consultas dentro del modelo de overviews
  El cual solo realiza dos consulta, una para obtener todos los datos con .find()
  Y la segunda que requiere de un ID para devolver toda la información de ese elemento
  
  ## Usage 
  
  N/A
  
  ## Arguments/Parameters
  
  _ID: Es el identificador del elemento del cual se quiere obtener toda la informacion 
  
  ## Examples
  
  N/A
  
  ## Return 
  N/A
  
  ## Category
  
  RegulonDB datamart web service
  
  ## License
  
  MIT License
  
  ## Author 
  
  RegulonDB Team: EDGAR ENRRIQUE HERNANDEZ MARCELO
  **/

exports.overviewsController = overviewsController;