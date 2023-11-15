const path = require('path');

let flavorsObj = {};
let flavorsArray = [];

function home(req, res, next) {
    res.sendFile(path.join(__dirname, '../', 'views', 'flavors.html'));
}

function quantity(req, res, next) {
    res.sendFile(path.join(__dirname, '../', 'views', 'quantity.html'));
}

function flavorError(req, res, next) {
    res.send('Select at least one flavor');
}

function quantityError(req, res, next) {
    res.send('Select quantity');
}

function postFlavors(req, res, next) {
    if (!req.body.flavor) {
        res.redirect('/postFlavors');
    }
    else {
        if (Array.isArray(req.body.flavor))
            flavorsArray = req.body.flavor;
        else
            flavorsArray.push(req.body.flavor);
        
        res.redirect('/selectQuantity');
    }
}

function postQuantity(req, res, next) {
    let quantity = req.body.quantity;
    console.log(quantity);
    if (!quantity || isNaN(quantity)) {
        res.redirect('/postQuantity');
    }
    else {
        for (let f of flavorsArray) {
            if (flavorsObj[f] != null) {
                flavorsObj[f] = flavorsObj[f] + parseInt(quantity);
            }
            else {
                flavorsObj[f] = parseInt(quantity);
            }
        }
        flavorsArray = [];

        res.redirect('/thankyou');
    }
}

function showOrder(req, res, next) {
    res.send(flavorsObj);
}

module.exports = {home, quantity, flavorError, quantityError, postFlavors, postQuantity, showOrder};