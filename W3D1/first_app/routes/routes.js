const express = require('express');
const path = require('path');
const utils = require('../services/utils');

const router = express.Router();

router.get('/', function(req, res, next) {
    res.sendFile(path.join(__dirname, '../', 'views', 'login.html'));
});

router.get('/profile', function(req, res, next) {
    res.sendFile(path.join(__dirname, '../', 'views', 'profile.html'));
});

router.get('/about', function(req, res, next) {
    res.sendFile(path.join(__dirname, '../', 'views', 'about.html'));
});

router.get('/form', function(req, res, next) {
    res.sendFile(path.join(__dirname, '../', 'views', 'form.html'));
});

router.post('/data', function(req, res, next) {
    utils.add(req.body.fname);
    
    res.send(req.body);
});

router.get('/data2', function(req, res, next) {
    console.log(req.query);
    console.log(req.body);
    res.send(req.query);
});

router.get('/users', function(req, res, next) {
    res.send('<div>Users: ' + utils.data() + '</div>');
});

module.exports = router;