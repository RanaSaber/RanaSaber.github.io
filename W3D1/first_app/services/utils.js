let arr = [];

function add(i) {
    arr.push(i);
}

function data() {
    return arr.join(', ');
}

module.exports = {add:add, data:data};