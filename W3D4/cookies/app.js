var express = require("express");
var app = express();
var ejs = require("ejs");
var path = require("path");
var cookieParser = require("cookie-parser");

app.listen(4000, function () {
    console.log(" Your server started listening")
})

//Read the parameters from post request
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", function (req, res, next) {
    res.cookie('x', '');
    res.cookie("y", []);
    res.cookie('obj', {});
    res.send(" TEST <form method='post' action='/postData'><input name='username'/><button type='submit'>Submit</button></form>");
})

app.post("/postData", function (req, res, next) {
    // let y = req.cookies.y;
    // y.push(req.body.username);
    // res.cookie('x', req.body.username);
    // res.cookie('y', y);
    // console.log(req.cookies);

    let obj = req.cookies.obj;
    let username = req.body.username;

    if (obj[username] == null) {
        obj[username] = 1;
    }
    else {
        obj[username] = obj[username] + 1;
    }

    res.cookie('obj', obj);

    res.redirect('/data');

})

app.get("/data", function (req, res, next) {
    res.send(req.cookies);
})