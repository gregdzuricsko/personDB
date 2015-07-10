"use strict";

var React = require('react');
var AddressForm = require('./AddressForm');
var Person = require('../models/Person');
var Address = require('../models/Person');
var PersonActions = require('../actions/PersonActions');

var PersonForm = React.createClass({

  componentDidMount: function() {
    React.findDOMNode(this.refs.firstName).focus();
  },
  render: function() {

    var addressForms = this.props.person.addresses.map(function(address, i) {
      return <AddressForm address={address} key={i} index={i} handleAddressInputChange={this.props.handleAddressInputChange}/>;
    }.bind(this));

    return (
      <div className="form-inline">
        <div className="form-group">
          <label htmlFor="firstNameInput">First Name</label>
          <input className="form-control" id="firstNameInput" onChange={this.handleInputChange.bind(this, 'firstName')} placeholder="First Name" ref="firstName" type="text" value={this.props.person.firstName}/>
        </div>
        <div className="form-group">
          <label htmlFor="lastNameInput">
            Last Name</label>
          <input className="form-control" id="lastnameInput" onChange={this.handleInputChange.bind(this, 'lastName')} placeholder="Last Name" type="text" value={this.props.person.lastName}/>
        </div>
        <button className="btn btn-default" onClick={this.props.addAddressForm}>Add Address</button>
        <button className="btn btn-primary" disabled={this.props.buttonDisabled} onClick={this.savePerson}>Save Person</button>
        <button className="btn btn-default" onClick={this.cancelClick}>Cancel</button>
        <div className="row">
          {addressForms}
        </div>
      </div>
    );

  },
  handleInputChange: function(field, e) {
    var newPerson = this.props.person;
    newPerson[field] = e.target.value;
    this.props.handlePersonInputChange(field, e.target.value);
  },
  savePerson: function(e) {
    console.log(this.props.person);
    if (this.props.person.id === 0) {
      this.props.createPerson(this.props.person);
    } else {
      this.props.updatePerson(this.props.person);
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
