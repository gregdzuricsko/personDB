"use strict";

var React = require('react');
var Select = require('react-select');
var States = require('../models/States');



function logChange(val) {
  console.log("Selected: " + val);
}

var SelectDemo = React.createClass({
  getInitialState: function() {
    return {
      multiple: true
    };
  },
  render: function() {
    var input = [];
    if (this.state.multiple) {
      for (var i = 0; i < 100; i++) {
        input.push(<Select onChange={logChange} options={States}/>);
      }
    }
    else{
      input = <Select onChange={logChange} options={States}/>;
    }
    return (
      <div>
       <button onClick={this.toggleMultiple}>Toggle Multiple</button>
       {input}
       </div>
    );
  },
  toggleMultiple: function(){
    this.setState({multiple: !this.state.multiple});
  }
});

module.exports = SelectDemo;
