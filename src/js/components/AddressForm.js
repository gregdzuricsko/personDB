"use strict";
var React = require('react');

var AddressForm = React.createClass({
  getInitialState: function() {
    return {
      address: this.props.address
    };
  },
  render: function() {
    return (
      <div>
        <input className="form-control" onChange={this.handleInputChange.bind(this, 'address1')} placeholder="Address 1" type="text" value={this.state.address.address1}/>
        <input className="form-control" onChange={this.handleInputChange.bind(this, 'address2')} placeholder="Address 2" type="text" value={this.state.address.address2}/>
        <input className="form-control" onChange={this.handleInputChange.bind(this, 'city')} placeholder="City" type="text" value={this.state.address.city}/>
        <input className="form-control" onChange={this.handleInputChange.bind(this, 'state')} placeholder="State" type="text" value={this.state.address.state}/>
        <input className="form-control" onChange={this.handleInputChange.bind(this, 'zip')} placeholder="Zip" type="text" value={this.state.address.zip}/>
      </div>
    );
  },
  handleInputChange: function(field, e) {
    var newAddress = this.state.address;
    newAddress[field] = e.target.value;
    this.setState({address: newAddress});
  }

});

module.exports = AddressForm;
