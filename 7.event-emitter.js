var events = require('events'); //We can create custom events in nodejs and then make them react to those events when they are emitted
var util   = require('util');                                 //util module is which is short for utilities, which allows us to do various things (inherit certain things from objects built into nodejs or other objects)
// element.on('click', function() {

// })
// var myEmitter = new events.EventEmitter();

// myEmitter.on('someEvent', function(msg){  //listening to event using on.
//     console.log(msg);
// });

// myEmitter.emit('someEvent', 'The Event was emitted'); //we are emitting(calling) the string using and passing an argument.

var Person = function(name){
    this.name = name;
};


util.inherits(Person, events.EventEmitter);

var jane = new Person('Jane');
var mary = new Person('Mary');
var ryu  = new Person('Ryuga');

var people = [jane, mary, ryu];

people.forEach(function(Person){
    Person.on('speak', function(msg){
        console.log(Person.name + ' said: ' + msg);
    });
});

jane.emit('speak', 'Hey Buds');
ryu.emit('speak', 'Iam Hungry');