const reduce = require("../reduce");

const items = [1, 2, 3, 4, 5, 5];

const ans = reduce(items, (acc, cv) => cv+acc, 10);
console.log(ans);