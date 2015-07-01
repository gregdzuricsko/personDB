"use strict";

var React = require('react');
var AddressList = require('./AddressList');


var PersonItem = React.createClass({
  render: function() {
    return (
      <div>
        {this.props.person.id} {this.props.person.firstName} {this.props.person.lastName}
        <AddressList addresses={this.props.person.addresses}/>
      </div>
    );
  }

});

module.exports = PersonItem;
