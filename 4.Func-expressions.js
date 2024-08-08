//Normal function statement
// function sayHi(){
//     console.log('Hi');
// }

// sayHi();

//call function
function callFunction(fun){
    fun();
}

//function expression
var sayTC = function(){
    console.log ('Take Care ;)');
};

// sayTC();
callFunction(sayTC);