let array = [{name: 'Ram', age: 20}, {name: 'Vivek', age: 30}];
let array2 = [10, 40, 13];

function filterNames(array) {
    return array.filter(function(v, ind, array) {
        return v.name.includes("a");
    })
}

function filterAge(array) {
    return array.filter(function(v, ind, array) {
        return v.age > 20;
    })
}

function sumEven(array) {
    return array.reduce(function(acc, v, ind, array) {
        return v%2 == 0? acc+=v : acc;
    }, 0);
}

console.log(filterNames(array));
console.log(filterAge(array));
console.log(sumEven(array2));