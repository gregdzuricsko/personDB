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
      <div className="col-md-5">
        <div className="row">
          <div className="col-md-6">
            <label htmlFor="address1Input">Address 1</label>
            <input id="address1Input" className="form-control" onChange={this.handleInputChange.bind(this, 'address1')} placeholder="Address 1" type="text" value={this.state.address.address1}/>
            <label htmlFor="address2Input">Address 2</label>
            <input id="address2Input" className="form-control" onChange={this.handleInputChange.bind(this, 'address2')} placeholder="Address 2" type="text" value={this.state.address.address2}/>
          </div>
          <div className="col-md-6">
            <label htmlFor="cityInput">City</label>
            <input id="cityInput" className="form-control" onChange={this.handleInputChange.bind(this, 'city')} placeholder="City" type="text" value={this.state.address.city}/>
            <label htmlFor="stateInput">State</label>
            <input id="stateInput" className="form-control" onChange={this.handleInputChange.bind(this, 'state')} placeholder="State" type="text" value={this.state.address.state}/>
            <label htmlFor="zipInput">Zip</label>
            <input id="zipInput" className="form-control" onChange={this.handleInputChange.bind(this, 'zip')} placeholder="Zip" type="text" value={this.state.address.zip}/>
          </div>
        </div>
      </div>
    );
  },
  handleInputChange: function(field, e) {
    var newAddress = this.state.address;
    newAddress[field] = e.target.value;
    this.setState({
      address: newAddress
    });
  }

});

module.exports = AddressForm;
