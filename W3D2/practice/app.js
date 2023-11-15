const express = require('express');
const app = express();
const router = require('./routes/main_routes')

app.listen(3000, function(){
    console.log("server started");
});

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use(router);