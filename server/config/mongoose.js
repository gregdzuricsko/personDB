"use strict";
var mongoose = require('mongoose');

module.exports = function(config) {
  mongoose.connect(config.db);

  var Person = mongoose.model('Person', {
    firstName: String,
    lastName: String
  });
};
