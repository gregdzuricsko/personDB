"use strict";

var React = require('react');
var AddressForm = require('./AddressForm');

var PersonForm = React.createClass({
  getInitialState: function() {
    return {
      buttonDisabled: false
    };
  },
  componentDidMount: function() {
    React.findDOMNode(this.refs.firstName).focus();
  },
  render: function() {

    var addressForms = this.props.person.addresses.map(function(address){
      return <AddressForm address={address}/>;
    });

    return (
      <form onSubmit={this.savePerson}>
        <input onChange={this.handleInputChange.bind(this, 'firstName')} placeholder="First Name" ref="firstName" type="text" value={this.props.person.firstName}/>
        <input onChange={this.handleInputChange.bind(this, 'lastName')} placeholder="Last Name" type="text" value={this.props.person.lastName}/>
        <button onClick={this.addAddressForm}>Add Address</button>
        {addressForms}
        <input disabled={this.state.buttonDisabled} type="submit" value="Save Person"/>
      </form>
    );

  },
  handleInputChange: function(field, e) {
    this.props.handlePersonInputChange(field, e.target.value);
  },
  addAddressForm: function(e){
    e.preventDefault();
    //call up to the main component to add a new address to the form, it is in charge of the state
    this.props.addAddressForm();
  },
  savePerson: function(e) {
    e.preventDefault();
    //call up to the main component to save the new person, as it is charge of the state

    if(this.props.person.id === 0){
      this.props.savePerson();
    }else{
      this.props.updatePerson();
    }

    return;
  }
});

module.exports = PersonForm;
