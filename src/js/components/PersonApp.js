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
      person: new Person(),
      insertMode: false
    };
  },
  componentDidMount: function() {
    PersonStore.addChangeListener(this.onChange);
  },
  render: function() {
    var input;
    if (this.state.insertMode) {
      input = <PersonForm createPerson={this.createPerson} person={this.state.person} updatePerson={this.updatePErson} cancelClick={this.cancelClick}/>;
    } else {
      input = <button className="btn btn-primary" onClick={this.newPersonClick}>Add New Person</button>;
    }

    return (
      <div>
        {input}
        <div>
          <PersonList editPerson={this.editPerson} people={this.state.people} getPeopleState={this.getPeopleState}/>
        </div>
      </div>
    );
  },
  newPersonClick: function() {
    this.setState({
      insertMode: true,
      person: new Person()
    });
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
    this.setState({
      insertMode: false
    });
  },
  cancelClick: function(){
    this.setState({insertMode: false});
  }

});

module.exports = PersonComponent;
