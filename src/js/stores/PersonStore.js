"use strict";

var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var $ = require('jquery');
var Promise = require('es6-promise').Promise;

//for now our memory storage of people is a hash map of objects keyed on ID
var people = {};
var index = 0;

//truly we would want to send to the server here
function create(person) {
  person.id = index + 1;
  index += 1;
  people[person.id] = person;
  return new Promise(function(resolve, reject) {
    $.ajax({
        method: "POST",
        url: "/api/people",
         contentType: "application/json; charset=utf-8",
        // dataType: "json",
        data: JSON.stringify(person)
      })
      .done(function(data, textStatus, jqXHR) {
        console.log(data);
        console.log(textStatus);
        console.log(jqXHR.getResponseHeader('Location'));
        //resolve(jqXHR);
      })
      .fail(function(xhr, err, status) {
        reject(err);
      });
  });
}

function update(person) {
  people[person.id] = person;
}

var PersonStore = assign({}, EventEmitter.prototype, {
  emitChange: function() {
    this.emit('change');
  },
  addChangeListener: function(callback) {
    this.on('change', callback);
  },
  getAllPeople: function() {
    return people;
  }

});


AppDispatcher.register(function(action) {

  switch (action.actionType) {
    case "CREATE":
      create(action.person).then(function(result) {
        console.log(result);
        PersonStore.emitChange();
      }, function(err) {
        console.log(err);
      });

      break;
    case "UPDATE":
      update(action.person);
      PersonStore.emitChange();
      break;
  }


});


module.exports = PersonStore;
