/*global routie */
"use strict";
var React = require("react");
var PersonApp = require("./components/PersonApp");
var SelectDemo = require('./components/SelectDemo');
var PersonListContainer = require('./components/PersonListContainer');

//TODO: Need better routing handling
document.getElementById('addPersonButton').addEventListener("click", function() {
  routie('person');
});

routie({
  'SelectDemo': function() {
    React.render(<SelectDemo/>, document.getElementById('app'));
  },
  'person': function() {
    React.render(<PersonApp/>, document.getElementById("app"));
  },
  '*': function() {
    React.render(<PersonListContainer/>, document.getElementById("app"));
  }
});
