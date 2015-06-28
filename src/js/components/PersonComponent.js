
var React = require("react");
var PersonStore = require('../stores/PersonStore');
var PersonActions = require('../actions/PersonActions');
var PersonForm = require('./PersonForm');
var PersonList = require('./PersonList');


function getPeopleState(){
	var people = [];
	var allPeople = PersonStore.getAllPeople();
	for (var key in allPeople) {
		if (allPeople.hasOwnProperty(key)) {
			people.push(allPeople[key]);
		}
	}
	return people;
}


var PersonApp = React.createClass({
	getInitialState: function(){
		return{
			people: getPeopleState()
		};
	},
	componentDidMount: function(){
		PersonStore.addChangeListener(this._onChange);
	},
	render:function(){
		return (
			<div>
				<PersonForm savePerson={this._savePerson}/>
				<div>
					<PersonList people={this.state.people}/>
				</div>
			</div>

			);
	},
	_savePerson: function(person){
		PersonActions.create(person.firstName, person.lastName);
	},
	_onChange : function(){
		this.setState({
			people: getPeopleState()
		});
	}

});

module.exports = PersonApp;
