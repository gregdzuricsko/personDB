"use strict";

var React = require('react');
var AddressList = require('./AddressList');
var PersonActions = require('../actions/PersonActions');
var PersonForm = require('./PersonForm');

var PersonItem = React.createClass({
  getInitialState: function() {
    return {
      originalPerson: this.props.person
    };
  },
  render: function() {
    var input;
      input = <div>
          <a href="#" onClick={this.onEditClick}>edit</a>{this.props.person.id} {this.props.person.firstName} {this.props.person.lastName}
          <AddressList addresses={this.props.person.addresses}/>
        </div>;
        
    return (
      <div>
        {input}
      </div>
    );
  },
  onEditClick: function(e) {
    console.log('edit click');
  },
  updatePerson: function(person) {
    this.setState({
      isEditing: false
    });
    PersonActions.update(person);
  },
  cancelClick: function() {
    this.setState({isEditing: false});
  }

});

module.exports = PersonItem;
