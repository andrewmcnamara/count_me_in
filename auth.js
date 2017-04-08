let passport = require('passport');
let BasicStrategy = require('passport-http').BasicStrategy;
passport.use(new BasicStrategy(function(username, password, callback){
    if (username === "admin" && password === password ){
        return callback(null, {});
      }else{
          return callback(null, {});
      }
    }
    ));

exports.isAuthenticated = passport.authenticate('basic', { session : false });