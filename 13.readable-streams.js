                                                            //StreamTransport
// - Writable streams  - allow node js to write data to a stream
// - Readable streams  - allow node js to read data from a stream
// - Duplex            - can read and write to a stream

var http = require('http');
var fs = require('fs');

var myReadStream  = fs.createReadStream(__dirname + '/readMe.txt', 'utf8');
var myWriteStream = fs.createWriteStream(__dirname + '/writeMe.txt');


myReadStream.on('data', function(chunk){
    console.log('New Chunk Received: ');
    myWriteStream.write(chunk);
});









