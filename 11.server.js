var http = require('http');

var server = http.createServer(function(req, res){
    console.log('request was made' + req.url);
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hey Weirdos');
});


server.listen(3006, '127.0.0.6');
console.log('Hey yo, now listening to port 3006');