//We don't typically dump all of our application code in one file and just let it run 
//So, we split our code into logical modules. Hence, we have a different module for a different bit of code which has a certain 
//  functionality in our application. Then we call upon those modules whenever we need them

var counter = require('./count-mod');

console.log(counter('I am', 'going', 'succeed', 'big')); //error because counter is not available in this module