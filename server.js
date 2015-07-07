"use strict";
var express = require('express');
var app = express();

var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';

//get configuration based on node environment object
var config = require('./server/config/config')[env];

//configure each module
require('./server/config/express')(app, config);
require('./server/config/mongoose')(config);
require('./server/config/routes')(app);


//start up the server
var server = app.listen(config.port, function() {
  var host = server.address().address;
  var port = server.address().port;
  console.log('listening on at http://%s:%s', host, port);
});
