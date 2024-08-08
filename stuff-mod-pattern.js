// var counter
// module.exports.counter  = function(arr){
//     return 'There are' + arr.length + ' elements in this array';
// };

// var adder 
// module.exports.adder = function(a,b){
//     return ` The sum of the 2 numbers is ${a+b}`;   //In " ` ` " strings we can embed variables or Expressions without concatenating them 
// };

// var pi 
// module.exports.pi = 3.142;

// module.exports.counter = counter;
// module.exports.adder   = adder;
// module.exports.pi      = pi;

var counter = function(arr){
    return 'There are' + arr.length + ' elements in this array';
};

var adder = function(a,b){
    return ` The sum of the 2 numbers is ${a+b}`;   //In " ` ` " strings we can embed variables or Expressions without concatenating them 
};


var pi = 3.142;

// module.exports = {
//     counter: counter,
//     adder  : adder,
//     pi : pi 
// };
module.exports = 'all functions';