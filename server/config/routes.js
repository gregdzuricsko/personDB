"use strict";
var mongoose = require('mongoose');
var Person = mongoose.model('Person');

module.exports = function(app) {
  //API routes
  app.get('/api/people', function(req, res) {
    Person.find(function(err, people) {
      if (err) {
        res.send(err);
      }
      res.send(people);
    });
  });

  app.get('/api/people/:id', function(req, res) {
    Person.findOne({
      _id: req.params.id
    }, function(err, person) {
      if (err) {
        res.send(err);
      }
      res.send(person);
    });
  });


  app.post('/api/people', function(req, res) {
    res.location('api/people/1');
    res.sendStatus(200);
  });
};
