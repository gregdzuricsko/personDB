"use strict";
var express = require('express');
var app = express();

require('./config/mongoose')();
require('./config/routes')(app);


//start up the server
var server = app.listen(8080, function() {
  var host = server.address().address;
  var port = server.address().port;
  console.log('listening on at http://%s:%s', host, port);
});
