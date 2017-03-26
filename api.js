var express = require('express')
var router = express.Router()
var db = require('./db/index.js');
var auth = require('./auth')

router.get('/', function(req, res) {
//   res.send('im the home page!');
  res.json({ message: 'You are running dangerously low on beer!' }); 
});

router.get('/classes',auth.isAuthenticated, db.getAllClasses);
// var apiRoutes = router.route('/api');

module.exports = router