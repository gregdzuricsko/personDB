var React = require('react');

var PersonForm = React.createClass({
	getInitialState: function(){
		return {
			firstName: "",
			lastName: ""
		}
	},
	render: function(){
		return (
			
			<div>
				<input type="text" placeholder="First Name" value={this.state.firstName}
						onChange={this._handleInputChange.bind(this,'firstName')}/>
				<input type="text" placeholder="Last Name" value={this.state.lastName}
						onChange={this._handleInputChange.bind(this,'lastName')}/>
					<button onClick={this._savePerson}>Save Person!</button>
			</div>
		);
		
	},
	_handleInputChange: function(field, e){
			var newState = this.state;
			newState[field] = e.target.value;
			this.setState(newState);
	},
	_savePerson: function(e){
		this.props.savePerson({firstName: this.state.firstName, lastName: this.state.lastName});
		this.setState({firstName: "", lastName:""});
	}
});


module.exports = PersonForm;
