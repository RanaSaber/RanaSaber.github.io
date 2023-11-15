let inventoryArray = [{name: 'a', price: 10, quantity: 20}, {name: 'b', price: 12, quantity: 17}];

function home(req, res, next) {
    res.render('index', {list: inventoryArray});
}

function addItem(req, res, next) {
    let obj = {};
    obj.name = req.body.name;
    obj.price = req.body.price;
    obj.quantity = req.body.quantity;

    inventoryArray.push(obj);

    res.redirect('/');
}

function editItem(req, res, next) {
    res.redirect('/');
}

function deleteItem(req, res, next) {
    res.redirect('/');
}

module.exports = {home, addItem, editItem, deleteItem};