var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

//for now our memory storage of people is a hash map of objects keyed on ID
var _people = {};
var _index = 0;

//truly we would want to send to the server here
function create(person){
	
	person.id = _index +1;
	_index += 1;
	_people[person.id] = person;
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
			create(action.person);
			PersonStore.emitChange();
		break;

	}


});


module.exports = PersonStore;
