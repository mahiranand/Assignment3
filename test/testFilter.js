const filter = require("../filter");

const items = [1, 2, 3, 4, 5, 5];

const output = filter(items, (ele) => ele%2 === 1 );

console.log(output);