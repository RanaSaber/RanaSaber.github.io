const express = require('express');
const path = require('path');
const utils = require('../services/utils')

const router = express.Router();

router.post('/login', function(req, res, next) {
    let user = utils.auth(req.body.username, req.body.password);

    if(user) {
        res.redirect('/profile');
    }
    else {
        res.redirect('/error');
    }
});

router.get("/", function(req, res, next) {
    res.sendFile(path.join(__dirname, "../html", "login.html"));
});

router.get("/profile", utils.authenticationMiddelware, function(req, res, next) {
    res.sendFile(path.join(__dirname, "../html", "profile.html"));
});

router.get("/error", function(req, res, next) {
    res.sendFile(path.join(__dirname, "../html", "error.html"));
});

module.exports = router;