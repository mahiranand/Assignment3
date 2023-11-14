const map = require("../map");

const items = [1, 2, 3, 4, 5, 5];

const newArr = map(items, (element) => {
    return element*2;
});

console.log(newArr);
