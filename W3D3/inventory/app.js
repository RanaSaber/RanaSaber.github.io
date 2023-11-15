const express = require('express');
const ejs = require('ejs');
const path = require('path');
const router = require('./routes/routes')

const app = express();

app.listen(5000, function(){
});

app.use(express.json());
app.use(express.urlencoded());

app.set('view engine', 'html');
app.engine('html', ejs.renderFile);

app.use('/stylesheets', express.static(path.join(__dirname, "stylesheets")));

app.use(router);