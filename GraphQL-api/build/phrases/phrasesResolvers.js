"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.phrasesResolvers = undefined;

var _phrasesController = require("./phrasesController");

const phrasesResolvers = exports.phrasesResolvers = {
  Query: {
    getPhraseOf: (root, {
      id
    }) => _phrasesController.phrasesController.getPhraseOf(id)
  }
};