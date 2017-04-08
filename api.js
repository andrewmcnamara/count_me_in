let express = require('express')
let router = express.Router()
let db = require('./db/index.js');
let auth = require('./auth')

router.get('/', function (req, res) {
//   res.send('im the home page!');
    res.json({message: 'You are running dangerously low on beer!'});
});

router.get('/classes', auth.isAuthenticated, (req, res) => {
    db.getAllClasses().then(function (data) {
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
});


router.get('/participants', auth.isAuthenticated, (req, res) => {
    db.getAllParticipants().then(function (data) {
        res.status(200)
            .json({
                status: 'success',
                data: data,
                message: 'Retrieved ALL participants'
            });
    })
        .catch(function (err) {
            return next(err);
        });
});


router.post('/participants', auth.isAuthenticated, function (req, res) {
    console.log(req.body);
    db.addParticipant(req.body).then(() => {
        res.status(200)
            .json({
                status: 'success',
                message: 'Saved participant'
            });
    });
});

// let apiRoutes = router.route('/api');

module.exports = router;