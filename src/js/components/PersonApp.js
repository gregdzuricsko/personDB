/*global routie */
"use strict";
var React = require("react");
require("react/addons");
var PersonStore = require('../stores/PersonStore');
var PersonForm = require('./PersonForm');
var PersonList = require('./PersonList');
var Person = require('../models/Person');
var Address = require('../models/Address');
var PersonActions = require('../actions/PersonActions');

var PersonComponent = React.createClass({
  getInitialState: function() {
//initialize a new person with one address already
    var p = new Person();
    p.addresses.push(new Address());
    return {
      person: p
    };
  },
  componentDidMount: function() {
//hook up listener for changes in the stores
    PersonStore.addChangeListener(this.onChange);
    this.setState({loading: true});
    if (this.props.personID) {
      PersonStore.getPersonByID(this.props.personID).then(function(person) {
        console.log('person retrievd');
        this.setState({
          person: person,
          loading: false
        });
      }.bind(this), function() {});
    }
  },
  render: function() {
    if(this.state.loading){
      var input = <div>LOADING!</div>;
    }
    return (
      <div>
              {input}
        <PersonForm cancelClick={this.cancelClick} createPerson={this.createPerson}
          handleAddressInputChange={this.handleAddressInputChange}
          handlePersonInputChange={this.handlePersonInputChange}
          person={this.state.person}
          updatePerson={this.updatePerson}
          addAddressForm={this.addAddressForm}/>
      </div>
    );
  },
  onChange: function() {
//on store change event listener
  },
  handlePersonInputChange: function(field, value) {
    var p = this.state.person;
    p[field] = value;
    this.setState({
      person: p
    });
  },
  handleAddressInputChange: function(index, field, value) {
    console.log(field);
    var a = this.state.person.addresses[index];
    var p = this.state.person;
    a[field] = value;
    p.addresses[index] = a;
    this.setState({
      person: p
    });

  },
  addAddressForm: function() {
    var p = this.state.person;
    p.addresses.push({});
    this.setState({
      person: p
    });
  },
  updatePerson: function(person) {
    PersonActions.update(person);
    routie('');
  },
  createPerson: function(person) {
    PersonActions.create(person);
    routie('');
  },
  cancelClick: function() {
    routie('');
  }

});

module.exports = PersonComponent;
