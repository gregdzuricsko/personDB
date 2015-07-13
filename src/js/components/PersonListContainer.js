/*global routie*/
"use strict";
var React = require('react');
var PersonList = require('./PersonList');
var PersonStore = require('../stores/PersonStore');

var PersonListContainer = React.createClass({
  getInitialState: function() {
    return {
      people: []
    };
  },
  componentDidMount: function(){
    PersonStore.getAllPeople().then(function(data){
      this.setState({
          people: data
      });
    }.bind(this), function(err){
      console.log(err);
    });
  },
  render: function() {
    return (
      <div>
        <button onClick={this.addPersonClick} className="btn btn-primary">Add Person</button>
        <PersonList people={this.state.people}/>
      </div>
    );
  },
  addPersonClick: function(){
    routie('people');
  }
});

module.exports = PersonListContainer;
