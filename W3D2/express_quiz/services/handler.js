const path = require('path');

let user = "";
let myArray = {guest:['Nuts',"Legumes"], owner:['Vegetables','Nuts','Fruits',"Legumes"]};

function home(req, res, next) {
    res.sendFile(path.join(__dirname, '../', 'views', 'login.html'));
}

function login(req, res, next) {
    if ((req.body.username == "guest" && req.body.password == "guest") ||
    (req.body.username == "owner" && req.body.password == "owner")) {
        user = req.body.username;
        res.redirect('/view');
    }
    else {
        user = "";
        res.redirect('/error');
    }
}

function auth(req, res, next) {
    if (user) {
        next();
    }
    else {
        res.redirect('/error');
    }
}

function error(req, res, next) {
    res.sendFile(path.join(__dirname, '../', 'views', 'error.html'));
}

function view(req, res, next) {
    res.sendFile(path.join(__dirname, '../', 'views', 'view.html'));
}

function showCategory(req, res, next) {
    if (user) {
        res.send('Welcome to ' + myArray[user]);
    }
    else {
        res.send('Unauthorized');
    }
}

module.exports = {home, login, error, view, showCategory, auth};