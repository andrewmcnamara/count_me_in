let express = require('express');
let app = express();
let bodyParser = require('body-parser');
let api = require('./api');
let passport = require('passport');

let port = process.env.PORT || 8080;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

// Use the passport package in our application
app.use(passport.initialize());

// apiRoutes.get('/api/classes',db.getAllClasses);
app.use('/api', api);
app.listen(port);
