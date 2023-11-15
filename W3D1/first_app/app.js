const express = require('express');
const router = require('./routes/routes');

const app = express();

app.listen(3000, function() {
    console.log('server started');
});

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(router);
