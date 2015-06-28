var AppDispatcher = require('../dispatcher/AppDispatcher');


var PersonActions = {

	create: function(person){
		AppDispatcher.dispatch({
			actionType: "CREATE",
			person:person
		});
	}

};

module.exports = PersonActions;
