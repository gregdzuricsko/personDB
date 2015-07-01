"use strict";

var React = require('react');
var AddressList = require('./AddressList');


var PersonItem = React.createClass({
  render: function() {
    return (
      <div>
        <a href="#" onClick={this.onEditClick}>edit</a> {this.props.person.id} {this.props.person.firstName} {this.props.person.lastName}
        <AddressList addresses={this.props.person.addresses}/>
      </div>
    );
  },
  onEditClick: function(e){
    this.props.editPerson(this.props.person.id);
  }

});

module.exports = PersonItem;
