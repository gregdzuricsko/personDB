"use strict";

var React = require('react');
var AddressForm = require('./AddressForm');
var Person = require('../models/Person');
var Address = require('../models/Person');
var PersonActions = require('../actions/PersonActions');

var PersonForm = React.createClass({
  getInitialState: function() {
    return {
      buttonDisabled: false,
      person: this.props.person || new Person()
    };
  },
  componentDidMount: function() {
    React.findDOMNode(this.refs.firstName).focus();
  },
  render: function() {

    var addressForms = this.state.person.addresses.map(function(address) {
      return <AddressForm address={address}/>;
    });

    return (
      <form onSubmit={this.savePerson}>
        <input onChange={this.handleInputChange.bind(this, 'firstName')} placeholder="First Name" ref="firstName" type="text" value={this.state.person.firstName}/>
        <input onChange={this.handleInputChange.bind(this, 'lastName')} placeholder="Last Name" type="text" value={this.state.person.lastName}/>
        <button onClick={this.addAddressForm}>Add Address</button>
        {addressForms}
        <input disabled={this.state.buttonDisabled} type="submit" value="Save Person"/>
      </form>
    );

  },
  handleInputChange: function(field, e) {
    var newPerson = this.state.person;
    newPerson[field] = e.target.value;
    this.setState({
      person: newPerson
    });
  },
  addAddressForm: function(e) {
    e.preventDefault();
    var currentPerson = this.state.person;
    currentPerson.addresses.push(new Address());
    this.setState({person: currentPerson});
  },
  savePerson: function(e) {
    e.preventDefault();
    if (this.state.person.id === 0) {
      this.props.createPerson(this.state.person);
    } else {
      this.props.updatePerson(this.state.person);
    }
    this.setState({person: new Person()});

    return;
  }
});

module.exports = PersonForm;
