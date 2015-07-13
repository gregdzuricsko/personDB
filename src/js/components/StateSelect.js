"use strict";

var React = require('react');
var States = require('../models/States');
var Select = require('react-select');

var StateSelect = React.createClass({
  render: function(){
    return (<Select onChange={this.props.onChange} options={States} value={this.props.value}/>);
  }
});


module.exports = StateSelect;
