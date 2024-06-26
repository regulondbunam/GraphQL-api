"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.overviewsResolver = void 0;
var _overviews_controller = require("./overviews_controller");
/**
# Overviews Resolver
	
## Description

Ejecuta los Querys o Mutations declarados en el .graphql, se encarga de mandarlos a traer y se los envía al controller
de esta manera se ejecutan los querys correspondientes

## Usage 
N/A
## Arguments/Parameters

_ID: Es el identificador del elemento del cual se quiere obtener toda la informacion 


## Examples

El resolver funciona por si solo, cuando se ejecuta una consulta en el Playground el resolver se encarga de
obtener el tipo de consulta que se realizará y manda al controlador la orden de ejecutarla, si se requiere por ejemplo
realizar una consulta de un elemento especifico por su ID, entonces recoge el ID lo ingresa en el query respectivo
y se manda esa información al controlador para ejecutar la consulta.

## Return 
N/A

## Category

RegulonDB datamart web service

## License

MIT License

## Author 

RegulonDB Team: EDGAR ENRRIQUE HERNANDEZ MARCELO
**/

var overviewsResolver = exports.overviewsResolver = {
  Query: {
    getAllObjectInfo: function getAllObjectInfo(root) {
      return _overviews_controller.overviewsController.getAllObjectInfo();
    },
    getOverview: function getOverview(root, _ref) {
      var _id = _ref._id;
      return _overviews_controller.overviewsController.getOverview(_id);
    }
  }
};

/**
	
# Functions description

## N/A
**/