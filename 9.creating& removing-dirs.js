var fs = require('fs');

// fsunlink('writeMe.txt'); for deleting file

fs.mkdir('stuff',function(){
    fs.readFile('readMe.txt', 'utf-8', function(err, data){
        fs.writeFile('./stuff/writeMe.txt', data);
    });
});
// fs.rmdirSync('stuff');

