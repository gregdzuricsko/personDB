"use strict";

var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var $ = require('jquery');
var PersonRepository = require('../repositories/PersonRepository');
var Promise = require('es6-promise').Promise;

//for now our memory storage of people is a hash map of objects keyed on ID
var people = {};


function _getAllPeople(){
  return PersonRepository.getAllPeople();
}

function create(person) {
  //wrapping in a promise to take care of logic beforep passing it along
  return new Promise(function(resolve, reject) {
    PersonRepository.createPerson(person).then(function() {
        people[person.id] = person;
        resolve(person);
      },
      function(err) {
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
    return _getAllPeople();
  }

});


AppDispatcher.register(function(action) {

  switch (action.actionType) {
    case "CREATE":
      create(action.person).then(function(result) {
        console.log('creat success!');
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
