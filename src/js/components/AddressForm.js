"use strict";
var React = require('react');

var AddressForm = React.createClass({
  render: function() {
    return (
      <div>
        <input placeholder="Address 1" type="text"/>
        <input placeholder="Address 2" type="text"/>
        <input placeholder="City" type="text"/>
        <input placeholder="State" type="text"/>
        <input placeholder="Zip" type="text"/>
      </div>
    );
  }

});

module.exports = AddressForm;
