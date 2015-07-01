"use strict";

var React = require('react');

var AddressItem = React.createClass({
  render: function() {
    return (
      <div>
        {this.props.address.address1} {this.props.address.address2} {this.props.address.city} {this.props.address.state} {this.props.address.zip}
      </div>
    );
  }

});

module.exports = AddressItem;
