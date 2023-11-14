const find = require("../find");

const items = [1, 2, 3, 4, 5, 5];

const ans = find(items, (ele) => ele*5 < 4);

console.log(ans);