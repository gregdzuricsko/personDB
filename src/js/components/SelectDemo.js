"use strict";

var React = require('react');
var Select = require('react-select');
var States = require('../models/States');
console.log(States);

var options = [{
  value: 'one',
  label: 'One'
}, {
  value: 'two',
  label: 'Two'
}];

function logChange(val) {
  console.log("Selected: " + val);
}

var SelectDemo = React.createClass({
  render: function() {
          return ( <Select  options={States} onChange={logChange}/> );
        }
});


module.exports = SelectDemo;
