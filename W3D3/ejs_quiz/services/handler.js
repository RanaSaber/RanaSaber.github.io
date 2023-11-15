let carSearch = {model:'', manufactures:['Audi','Acura','BMW'], years:['2020','2021']};
let selectedObj = {model:'', manufactures:'', years:''};

function home(req, res, next) {
    res.render('index', {obj: carSearch, selectedObj:selectedObj});
}

function postData(req, res, next) {
    selectedObj.model = req.body.model;
    selectedObj.manufactures = req.body.manufactures;
    selectedObj.years = req.body.years;

    res.redirect('/preview');
}

function preview(req, res, next) {
    res.render('preview', {obj: selectedObj});
}

module.exports = {home, postData, preview}