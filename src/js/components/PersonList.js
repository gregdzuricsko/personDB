"use strict";

var React = require('react');
var PersonItem = require('./PersonItem');

var PersonList = React.createClass({
  render: function() {
    console.log(this.props.people);
    var items = this.props.people.map(function(person) {
      return <PersonItem key={person.id} person={person} editPerson={this.props.editPerson} />;
    }.bind(this));

    return (
      <div>
        {items}
      </div>
    );
  }

});

module.exports = PersonList;
