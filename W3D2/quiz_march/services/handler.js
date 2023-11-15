const path = require('path');

let history = {};
let error = 'Opps! something went wrong.';
let flag = false;

function home(req, res, next) {
    res.sendFile(path.join(__dirname, '../', 'views', 'index.html'));
}

function postData(req, res, next) {
    if (!req.body.number || !req.body.type) {
        res.sendFile(path.join(__dirname, '../', 'views', 'index.html'));
    }
    else {
        let number = parseInt(req.body.number);
        if ((req.body.type == 'Odd' && number%2 == 1) || (req.body.type == 'Even' && number%2 == 0)) {
            history[req.body.number] = req.body.type;
            flag = true;
        }
        else {
            flag = false;
        }
        res.redirect('/submit');
    }
}

function showHistory(req, res, next) {
    if (flag) {
        res.send(history);
    }
    else {
        res.send(error);
    }
}

module.exports = {home, postData, showHistory};