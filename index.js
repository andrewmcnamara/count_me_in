var express = require('express');
var app        = express(); 
var bodyParser = require('body-parser');
var api = require('./api');
var passport = require('passport');

var port = process.env.PORT || 8080; 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

// Use the passport package in our application
app.use(passport.initialize());

// apiRoutes.get('/api/classes',db.getAllClasses);
app.use('/api', api);
app.listen(port);
