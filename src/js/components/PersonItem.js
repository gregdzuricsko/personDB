"use strict";

var React = require('react');

var PersonItem = React.createClass({
  render: function() {
    return (
      <div>{this.props.person.id} {this.props.person.firstName} {this.props.person.lastName}</div>
    );
  }

});

module.exports = PersonItem;
