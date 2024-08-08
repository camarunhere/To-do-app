var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res){
    console.log('request was made' + req.url)
    if(req.url === '/home' || req.url === '/'){
        res.writeHead(200, {'Content-Type': 'text/html'});
        fs.createReadStream(__dirname + '/index.html').pipe(res);
    } else if (req.url === '/contact'){
        res.writeHead(200, {'Content-Type': 'text/html'});
        fs.createReadStream(__dirname + '/contact.html').pipe(res);
    } else if(req.url === '/api/weirdos'){
        var weirdos = [{name: 'Arun', age: 23}, {name: 'Geet', age: 22}];
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(JSON.stringify(weirdos));
    } else{
        res.writeHead(404, {'Content-Type': 'text/html'});
        fs.createReadStream(__dirname + '/404.html').pipe(res);
    }
});


server.listen(3010, '127.0.0.6');
console.log('Hey yo, now listening to port 3010');