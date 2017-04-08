let promise = require('bluebird');

let options = {
    // Initialization Options
    promiseLib: promise
};

let pgp = require('pg-promise')(options);
let connectionString = 'postgres://localhost:5432/count_me_in';
let db = pgp(connectionString);

// add query functions
function getAllClasses() {
    return db.any('select * from classes');
}


function getAllParticipants() {
    return db.any('select * from participants');
}

function addParticipant(data) {
    return db.none("insert into participants(name,email) values(${name},${email})", data);
}


module.exports = {
    getAllClasses: getAllClasses,
    getAllParticipants: getAllParticipants,
    addParticipant: addParticipant
};
