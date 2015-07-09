/*global routie */
"use strict";
var React = require("react");
var PersonStore = require('../stores/PersonStore');
var PersonForm = require('./PersonForm');
var PersonList = require('./PersonList');
var Person = require('../models/Person');
var Address = require('../models/Address');
var PersonActions = require('../actions/PersonActions');

function getPeopleState() {
  var people = [];
  var allPeople = PersonStore.getAllPeople();
  for (var key in allPeople) {
    if (allPeople.hasOwnProperty(key)) {
      people.push(allPeople[key]);
    }
  }
  return people;
}

var PersonComponent = React.createClass({
  getInitialState: function() {
    //initialize a new person with one address already
    var p = new Person();
    p.addresses.push(new Address());
    console.log(p);
    return {
      person: p
    };
  },
  componentDidMount: function() {
    PersonStore.addChangeListener(this.onChange);
  },
  render: function() {
    return (
      <div>
        <PersonForm createPerson={this.createPerson} person={this.state.person} updatePerson={this.updatePErson} cancelClick={this.cancelClick}/>;
      </div>
    );
  },
  onChange: function() {
    this.setState({
      people: getPeopleState()
    });
  },
  updatePerson: function(person) {
    PersonActions.update(person);
  },
  createPerson: function(person) {
    PersonActions.create(person);
  },
  cancelClick: function(){
    routie('');
  }

});

module.exports = PersonComponent;
