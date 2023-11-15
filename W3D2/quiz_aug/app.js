const express = require('express');
const router = require('./routes/routes')

const app = express();

app.listen(5000, function(){});

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use(router);