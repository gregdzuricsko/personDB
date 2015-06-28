/***
* Some basic packages you will find
* object-assign: This package is a node package that makes it easy to merge object properties into one object. Used for simple inheritance (see PersonStore)
* es6-promise: This is a promis library. I think it is a polyfill for ES6 until it is available
* events (EventEmitter) - A node library for a class that emits events. Used for our store implementation to notify of changes
*/

var React = require('react');
var PersonApp = require('./components/PersonApp');

React.render(<PersonApp/>, document.getElementById("app"));
