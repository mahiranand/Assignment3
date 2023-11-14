const flatten = require("../flatten");

const nestedArray = [1, [2], [[3]], [[[4]]]];

const newArr = flatten(nestedArray);
console.log(newArr);