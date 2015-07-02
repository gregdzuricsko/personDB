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
        <PersonForm person={this.state.person} updatePerson={this.updatePErson} createPerson={this.createPerson}/>
        <div>
          <PersonList people={this.state.people} editPerson={this.editPerson} />
        </div>
      </div>
    );
  },
  onChange: function() {
    this.setState({
      people: getPeopleState()
    });
  },
  updatePerson: function(person){
    PersonActions.update(person);

  },
  createPerson: function(person){
    PersonActions.create(person);
  }

});

module.exports = PersonComponent;
