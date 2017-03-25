var express = require('express');
var app        = express(); 
var router = express.Router();
var db = require('./db/index.js');

var port = process.env.PORT || 8080; 

app.get('/api/classes',db.getAllClasses);

app.listen(port);
