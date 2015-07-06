/*global routie */
"use strict";
var React = require("react");
var PersonApp = require("./components/PersonApp");
var SelectDemo = require('./components/SelectDemo');

routie({
  'SelectDemo': function() {
    React.render(<SelectDemo/>, document.getElementById('app'));
  },
  '*': function() {
    React.render(<PersonApp/>, document.getElementById("app"));
  }
});
