"use strict";

var React = require('react');
var Person = require('../models/Person');
var PersonActions = require('../actions/PersonActions');
var AddressForm = require('./AddressForm');

var PersonForm = React.createClass({
  getInitialState: function() {
    return {
      firstName: "",
      lastName: "",
      buttonDisabled: true
    };
  },
  componentDidMount: function() {
    React.findDOMNode(this.refs.firstName).focus();
  },
  render: function() {
    return (
      <form onSubmit={this.savePerson}>
        <input onChange={this.handleInputChange.bind(this, 'firstName')} placeholder="First Name" ref="firstName" type="text" value={this.state.firstName}/>
        <input onChange={this.handleInputChange.bind(this, 'lastName')} placeholder="Last Name" type="text" value={this.state.lastName}/>
        <AddressForm/>
        <input disabled={this.state.buttonDisabled} type="submit" value="Save Person"/>
      </form>
    );

  },
  handleInputChange: function(field, e) {
    var newState = this.state;
    newState[field] = e.target.value;
    newState.buttonDisabled = (!newState.firstName && !newState.lastName);
    this.setState(newState);
  },
  savePerson: function(e) {
//prevent the postback of the form
    e.preventDefault();

//fill out our person and call up to the main app to save
    var p = new Person();
    p.firstName = this.state.firstName.trim();
    p.lastName = this.state.lastName.trim();
    if (p.firstName || p.lastName) {
      PersonActions.create(p);
      this.setState({
        firstName: "",
        lastName: ""
      });
      React.findDOMNode(this.refs.firstName).focus();
    }

    return;
  }
});

module.exports = PersonForm;
