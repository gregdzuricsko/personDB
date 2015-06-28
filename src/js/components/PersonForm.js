var React = require('react');
var Person = require('../models/Person');
var PersonActions = require('../actions/PersonActions');

var PersonForm = React.createClass({
	getInitialState: function(){
		return {
			firstName: "",
			lastName: "",
			buttonDisabled:true
		};
	},
	componentDidMount: function(){
		React.findDOMNode(this.refs.firstName).focus();
	},
	render: function(){
		return (

			<form onSubmit={this._savePerson}>
				<input type="text" placeholder="First Name" value={this.state.firstName} ref="firstName"
						onChange={this._handleInputChange.bind(this,'firstName')}/>
				<input type="text" placeholder="Last Name" value={this.state.lastName}
						onChange={this._handleInputChange.bind(this,'lastName')}/>
				<input type="submit" value="Save Person" disabled={this.state.buttonDisabled} onClick={this._savePerson}/>
			</form>
		);

	},
	_handleInputChange: function(field, e){
			var newState = this.state;
			newState[field] = e.target.value;
			newState.buttonDisabled = (!newState.firstName && !newState.lastName);
			this.setState(newState);
	},
	_savePerson: function(e){
		//prevent the postback of the form
		e.preventDefault();

		//fill out our person and call up to the main app to save
		var p = new Person();
		p.firstName = this.state.firstName.trim();
		p.lastName = this.state.lastName.trim();
		if(p.firstName || p.lastName){
			PersonActions.create(p);
			this.setState({firstName: "", lastName:""});
			React.findDOMNode(this.refs.firstName).focus();
		}

		return;
	}
});


module.exports = PersonForm;
