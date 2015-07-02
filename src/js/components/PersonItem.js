"use strict";

var React = require('react');
var AddressList = require('./AddressList');
var PersonActions = require('../actions/PersonActions');
var PersonForm = require('./PersonForm');

var PersonItem = React.createClass({
  getInitialState: function() {
    return {
      isEditing: false
    };
  },
  render: function() {
    var input;
    if (this.state.isEditing) {
      input = <PersonForm updatePerson={this.updatePerson} person={this.props.person} updatePerson={this.updatePerson}/>;
    }
    else{
      input = <div><a href="#" onClick={this.onEditClick}>edit</a>{this.props.person.id} {this.props.person.firstName} {this.props.person.lastName}
            <AddressList addresses={this.props.person.addresses}/>
            </div>;
    }
    return (
      <div>
        {input}
      </div>
    );
  },
  onEditClick: function(e) {
    this.setState({
      isEditing: true
    });
  },
  updatePerson: function(person) {
    this.setState({
      isEditing: false
    });
    PersonActions.update(person);
  }

});

module.exports = PersonItem;
