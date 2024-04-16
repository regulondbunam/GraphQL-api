"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Overviews = void 0;
var _mongoose = _interopRequireDefault(require("mongoose"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
/**
# Overviews Model

## Description
Genera el modelo de las collecciones en mongoDB, todo el modelo que aquí se genere deberá ser igual a la declaración
del Schema.graphql, deberá seguir la misma estructura de la colección en mongo así como de los tipos de datos ya que 
este modelo será con el que podremos enviar la información a el servicio web.

## Usage 

N/A

## Arguments/Parameters

N/A

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

//Importamos el modulo de mongoose para poder crear un schema 

var objectsRelatedSchema = new _mongoose["default"].Schema({
  _id: String,
  name: String,
  type: String
});

//Generamos el schema con los mismos campos, tipos de datos y nombre de las variables definidas en nuestro .graphql
var overviewInformationObject = new _mongoose["default"].Schema({
  _id: String,
  queryName: String,
  objectType: String,
  graph: {
    title: String,
    description: String,
    labelX: String,
    labelY: String,
    footGraph: String,
    graphType: String
  },
  data: [{
    xAxis: Number,
    yAxis: Number,
    objectsRelated: [objectsRelatedSchema]
  }]
});

//Creamos un modelo de nuestro schema, con el modulo mongoo.model y agregando el nombre de la base de datos a la cual se conectará
//y enviandole nuestro Schema generado anteriormente, ya que deberá existir esa misma coleccion en mongo y podrémos obtener todos esos datos
var Overviews = exports.Overviews = _mongoose["default"].model('overviews', overviewInformationObject); //Cambiar geneDatamarts por la variable

/**
	
# Functions description

## N/A
**/