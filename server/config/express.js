"use strict";
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

module.exports = function(app, config) {
  //set path to static content which is our dist folder from the output of the build process
  app.use(express.static(path.join(config.rootPath, 'dist')));
  //allow for parsing of JSON data
  app.use(bodyParser.json());
};
