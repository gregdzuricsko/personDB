/*global routie*/
"use strict";
var React = require("react");
var PersonApp = require("./components/PersonApp");
var PersonListContainer = require('./components/PersonListContainer');


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
