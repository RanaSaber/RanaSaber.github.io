const path = require('path');

let count = 0;
let data;

function home(req, res, next) {
    count++;
    res.sendFile(path.join(__dirname, '../', 'views', 'exam.html'));
}

function postData(req, res, next) {
    data = req.body;
    res.redirect('/preview');
}

function preview(req, res, next) {
    let html = '<div>Count: ' + count + '</div>';
    html += '<div>Question1: ' + data.question1 + '</div>';
    html += '<div>Question2: ' + data.question2 + '</div>';
    html += '<div>Question3: ' + data.question3 + '</div>';

    res.send(html);
}

module.exports = {home, postData, preview};