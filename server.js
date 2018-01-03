// Dependencies
var express = require('express'),
    bodyParser = require('body-parser'),
    path = require('path')
    port = process.env.PORT || 3000;

var app = new express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.query());
app.use(express.static(path.join(__dirname, 'public')));

// Enable CORS from client side
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization, Access-Control-Allow-Credentials');
    res.header('Access-Control-Allow-Credentials', 'true');
});

// Start Server
app.use('*', function (req, res) {
    res.sendFile(__dirname + '/public/index.html');
});

app.listen(port);
console.log('App Started on Port ' + port);