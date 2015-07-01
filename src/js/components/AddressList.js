"use strict";

var React = require('react');
var AddressItem = require('./AddressItem');

var AddressList = React.createClass({
  render: function() {
    var addressComponents = this.props.addresses.map(function(address) {
      return (
        <AddressItem address= {address}/>
      );
    });

    return (
      <div>
        { addressComponents }
      </div>
    );
  }

});


module.exports = AddressList;
