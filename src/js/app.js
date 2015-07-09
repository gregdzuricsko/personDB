"use strict";
var React = require("react");
var PersonApp = require("./components/PersonApp");
var SelectDemo = require('./components/SelectDemo');
var PersonListContainer = require('./components/PersonListContainer');
var routie = require('../../lib/routieModule');
//TODO: Need better routing handling
document.getElementById('addPersonButton').addEventListener("click", function() {
  routie('people');
});

routie({
  'SelectDemo': function() {
    React.render(<SelectDemo/>, document.getElementById('app'));
  },
  'people': function() {
    React.render(<PersonApp/>, document.getElementById("app"));
  },
  'people/:id': function(id) {
    React.render(<PersonApp personID={id}/>, document.getElementById("app"));
  },
  '*': function() {
    React.render(<PersonListContainer/>, document.getElementById("app"));
  }
});
