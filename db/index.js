var promise = require('bluebird');

var options = {
  // Initialization Options
  promiseLib: promise
};

var pgp = require('pg-promise')(options);
var connectionString = 'postgres://localhost:5432/count_me_in';
var db = pgp(connectionString);

// add query functions
function getAllClasses(req, res, next) {
  db.any('select * from classes')
    .then(function (data) {
      res.status(200)
        .json({
          status: 'success',
          data: data,
          message: 'Retrieved ALL classes'
        });
    })
    .catch(function (err) {
      return next(err);
    });
}


module.exports = {
  getAllClasses: getAllClasses,
};
