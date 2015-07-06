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
    var contactForm = this.state.person.contact

    return (
      <div className="form-inline" >
        <div className="form-group">
          <label htmlFor="firstNameInput">First Name</label>
          <input className="form-control" id="firstNameInput" onChange={this.handleInputChange.bind(this, 'firstName')} placeholder="First Name" ref="firstName" type="text" value={this.state.person.firstName}/>
        </div>
        <div className="form-group">
          <label htmlFor="lastNameInput">
            Last Name</label>
          <input className="form-control" id="lastnameInput" onChange={this.handleInputChange.bind(this, 'lastName')} placeholder="Last Name" type="text" value={this.state.person.lastName}/>
        </div>
        <button className="btn btn-default" onClick={this.addAddressForm}>Add Address</button>
        <button className="btn btn-primary" disabled={this.state.buttonDisabled} onClick={this.savePerson}>Save Person</button>
        <button className="btn btn-default" onClick={this.cancelClick}>Cancel</button>
        <div className="row">
        {addressForms}
        <div className="form-group">
            {contactForm}
        </div>
      </div>
      </div>
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
    var currentPerson = this.state.person;
    currentPerson.addresses.push(new Address());
    this.setState({
      person: currentPerson
    });
  },
  savePerson: function(e) {
    if (this.state.person.id === 0) {
      this.props.createPerson(this.state.person);
    } else {
      this.props.updatePerson(this.state.person);
    }
    this.setState({
      person: new Person()
    });
  },
  cancelClick: function(e) {
    this.props.cancelClick();
  }
});

module.exports = PersonForm;
