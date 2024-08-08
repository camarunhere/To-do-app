var express = require('express');
var bodyParser = require('body-parser'); 
var app = express();

var urlencodeParser = bodyParser.urlencoded({ extended: false}); //middleware


app.set('view engine', 'ejs');
app.use('/assets',express.static('stuff'));


app.get('/', function(req, res){
    res.render('index');
});

app.get('/contact', function(req, res){
    res.render('contact', {qs: req.query});
});

app.post('/contact', urlencodeParser, function(req, res){
    console.log(req.body);
    res.render('contact-success', {data: req.body});
});

app.get('/profile/:name', function(req, res){
    var data = {age: 23, job: 'Developer', hobbies: ['Playing', 'Travelling', 'Listening' ]}; 
    res.render('profile', {person: req.params.name, data: data});
});

app.listen(3013); 