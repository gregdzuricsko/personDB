"use strict";
var React = require("react");
var PersonStore = require('../stores/PersonStore');
var PersonForm = require('./PersonForm');
var PersonList = require('./PersonList');
var Person = require('../models/Person');
var Address = require('../models/Person');
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
    return {
      people: getPeopleState(),
      person: new Person()
    };
  },
  componentDidMount: function() {
    PersonStore.addChangeListener(this.onChange);
  },
  render: function() {
    return (
      <div>
        <PersonForm person={this.state.person} handlePersonInputChange={this.handlePersonInputChange} savePerson={this.savePerson} addAddressForm={this.addAddressForm} updatePerson={this.updatePerson}/>
        <div>
          <PersonList people={this.state.people} editPerson={this.editPerson} />
        </div>
      </div>
    );
  },
  handlePersonInputChange: function(field, value){
    var newPerson = this.state.person;
    newPerson[field] = value;
    this.setState({person: newPerson});
  },
  onChange: function() {
    this.setState({
      people: getPeopleState()
    });
  },
  addAddressForm: function(){
    var currentPerson = this.state.person;
    currentPerson.addresses.push(new Address());
    this.setState({person: currentPerson});
  },
  savePerson: function() {
    PersonActions.create(this.state.person);
    this.setState({person: new Person()});
  },
  updatePerson: function(){
    PersonActions.update(this.state.person);
    this.setState({person: new Person()});
  },
  editPerson: function(personID){
    var people = this.state.people;
    var person;
    for (var i = 0; i < people.length; i++) {
      if(people[i].id === personID){
        person = people[i];
        break;
      }
    }
    this.setState({person: person});
  }

});

module.exports = PersonComponent;
