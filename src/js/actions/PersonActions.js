"use strict";
var AppDispatcher = require('../dispatcher/AppDispatcher');


var PersonActions = {

  create: function(person) {
    AppDispatcher.dispatch({
      actionType: "CREATE",
      person: person
    });
  },
	update: function(person){
		AppDispatcher.dispatch({
			actionType: "UPDATE",
			person: person
		});
	}

};

module.exports = PersonActions;
