var React = require('react');
var PersonItem = require('./PersonItem');

var PersonList = React.createClass({
  render: function() {
    var items = this.props.people.map(function(person) {
      return <PersonItem key={person.id} person={person}/>;

    });

    return (
      <div>
        {items}
      </div>
    );
  }

});

module.exports = PersonList;
