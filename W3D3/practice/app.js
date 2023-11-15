const express = require('express');
const ejs = require('ejs');

const app = express();

app.listen(3000, function(){});

app.use(express.json());
app.use(express.urlencoded());

app.set('view engine', 'html');
app.engine('html', ejs.renderFile);

app.get('/', function(req, res, next) {
    res.render('index', {list: {name: 'Rana', age: 27, skills: ['Python', 'Java', 'Javascript']}});
});