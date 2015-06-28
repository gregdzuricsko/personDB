var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

//for now our memory storage of people is a hash map of objects keyed on ID
var _people = {};


//truly we would want to send to the server here
function create(firstName, lastName){
	var id = (+new Date() + Math.floor(Math.random() * 999999)).toString(36);
	_people[id] = {
		id: id,
		firstName: firstName,
		lastName: lastName
	};
}


var PersonStore = assign({}, EventEmitter.prototype, {
	emitChange:function(){
		this.emit('change');
	},
  addChangeListener: function(callback) {
   	 this.on('change', callback);
  },
  getAllPeople: function(){
	  return _people;
  }

});


AppDispatcher.register(function(action){
	var firstName,
		lastName;
	switch(action.actionType){
		case "CREATE":
			firstName = action.firstName.trim();
			lastName = action.lastName.trim();
			create(firstName, lastName);
			PersonStore.emitChange();
		break;

	}


});


module.exports = PersonStore;
