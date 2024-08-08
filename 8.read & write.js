var fs = require('fs');

// var readMe = 
fs.readFile('readMe.txt', 'utf8', function(err, data){ //sync is used to block the below code before it's execution
    // console.log(data);
 fs.writeFile('writeMe.txt', data);
}); 
// console.log(readMe);
// fs.writeFileSync('writeMe.txt', readMe);
// console.log('test');

