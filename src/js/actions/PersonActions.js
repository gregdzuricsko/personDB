var AppDispatcher = require('../dispatcher/AppDispatcher');


var PersonActions = {
	
	create: function(firstName, lastName){
		AppDispatcher.dispatch({
			actionType: "CREATE",
			firstName: firstName,
			lastName: lastName
		});
	}
	
};

module.exports = PersonActions;