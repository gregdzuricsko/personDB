"use strict";
var $ = require('jquery');

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


exports.getAllPeople = function() {
  return new Promise(function(resolve, reject) {
    $.ajax({
        method: "GET",
        url: "/api/people",
      })
      .done(function(data, textStatus, jqXHR) {
        resolve(data);
      })
      .fail(function(xhr, err, status) {
        reject(err);
      });
  });
};
