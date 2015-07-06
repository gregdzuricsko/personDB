/*global routie */
"use strict";
var React = require("react");
var PersonApp = require("./components/PersonApp");

routie({
  '*': function() {
    React.render(<PersonApp/>, document.getElementById("app"));
  }
});
