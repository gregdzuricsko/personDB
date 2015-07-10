"use strict";
var $ = require('jquery');
var Person = require('../models/Person');

exports.createPerson = function(person) {
  return new Promise(function(resolve, reject) {
    $.ajax({
        method: "POST",
        url: "/api/people",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify(person)
      })
      .done(function(data, textStatus, jqXHR) {
        person.id = jqXHR.getResponseHeader('Location');
        resolve(person);
      })
      .fail(function(xhr, err, status) {
        reject(err);
      });
  });
};
exports.updatePerson = function(person) {
  return new Promise(function(resolve, reject) {
    $.ajax({
        method: "PUT",
        url: "/api/people/" + person.id,
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify(person)
      })
      .done(function(data, textStatus, jqXHR) {
        // person.id = jqXHR.getResponseHeader('Location');
        // resolve(person);
      })
      .fail(function(xhr, err, status) {
        reject(err);
      });
  });
};


exports.getAllPeople = function() {
  return new Promise(function(resolve, reject) {
    $.ajax({
        method: "GET",
        url: "/api/people"
      })
      .done(function(data, textStatus, jqXHR) {
        var result = [];
        var tmpObject;
        for (var i = 0; i < data.length; i++) {
          tmpObject = new Person();
          tmpObject.id = data[i]._id;
          tmpObject.firstName = data[i].firstName;
          tmpObject.lastName = data[i].lastName;
          tmpObject.addresses = [];
          result.push(tmpObject);
        }
        resolve(result);
      })
      .fail(function(xhr, err, status) {
        reject(err);
      });
  });
};

exports.getPersonByID = function(id) {
  return new Promise(function(resolve, reject) {
    $.ajax({
        method: "GET",
        url: "/api/people/" + id
      })
      .done(function(data, textStatus, jqXHR) {
        //TODO REMOVE ME WHEN WE GET ADDRESSES
        data.addresses = [];
        data.id = data._id;

        resolve(data);
      })
      .fail(function(xhr, err, status) {

      });

  });
};
