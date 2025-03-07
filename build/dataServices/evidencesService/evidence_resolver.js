"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.evidencesDatamartResolvers = void 0;
var _evidence_controller = require("./evidence_controller");
function _objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError("Cannot destructure " + obj); }
var evidencesDatamartResolvers = exports.evidencesDatamartResolvers = {
  Query: {
    getAllEvidences: function getAllEvidences(root, _ref) {
      _objectDestructuringEmpty(_ref);
      return _evidence_controller.evidencesController.getAllEvidences();
    }
  }
};