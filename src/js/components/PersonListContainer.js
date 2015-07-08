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
          people: [{firstName: "Kirsten", lastName: "Rassier", addresses: []}]
      });
    }, function(err){
      console.log(err);
    });
  },
  render: function() {
    return (
      <div>
        <PersonList people={this.state.people}/>
        <button onClick={this.setTheState}>Click Me!</button>
      </div>
    );
  },
  setTheState: function(){
    console.log(this.state);
    this.setState({
        people: [{firstName: "Kirsten", lastName: "Rassier", addresses: []}]
    });
  }

});

module.exports = PersonListContainer;
