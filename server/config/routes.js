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
      if (!person) {
        res.sendStatus(404);
      } else {
        res.send(person);
      }
    });
  });


  app.post('/api/people', function(req, res) {
    var p = new Person(req.body);

    p.save(function(err) {
      if (err) {
        console.log('ERROR SAVING ' + err);
        res.sendStatus(500);
      }
      res.location('api/people/' + p.id);
      res.sendStatus(201);
    });
  });
};
