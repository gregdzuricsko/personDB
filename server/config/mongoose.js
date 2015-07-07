"use strict";
var mongoose = require('mongoose');

module.exports = function() {
  mongoose.connect("mongodb://justinrassier:Oeve6Ne5sG2p@ds053160.mongolab.com:53160/persondb");

  var Person = mongoose.model('Person', {
    firstName: String,
    lastName: String
  });
};
