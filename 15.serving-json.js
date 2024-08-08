var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res){
    console.log('request was made' + req.url);
    res.writeHead(200, {'Content-Type': 'application/json'});
    var myObj = {
        name: 'Richard',
        job : 'Nodejs Developer',
        age : 23
    };
    res.end(JSON.stringify(myObj));
});


server.listen(3008, '127.0.0.6');
console.log('Hey yo, now listening to port 3008');