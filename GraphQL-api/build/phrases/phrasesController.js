"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.phrasesController = undefined;

var _phrasesModel = require("./phrasesModel");

class phrasesController {
  static getPhraseOf(id) {
    const foundPhrases = _phrasesModel.phrases.find({
      objectId: id
    });

    return foundPhrases;
  }

}

exports.phrasesController = phrasesController;