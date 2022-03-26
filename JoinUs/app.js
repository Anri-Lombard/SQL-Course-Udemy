var express = require('express');
var app = express();

app.get('/', function(req, res){
    res.send('Home!');
})

app.get('/about', function(req, res){
    res.send('About!')
})

app.listen(8080, function() {
    console.log('server running on port 8080');
})