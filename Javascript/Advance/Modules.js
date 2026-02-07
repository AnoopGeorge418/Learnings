// default import
import multiply  from "./math.js";

// named import
import { add } from "./math.js";
import { subtract } from "./math.js";

console.log(add(2, 2));
console.log(multiply(2, 2))
console.log(subtract(2, 2))

// CommonJs
// const math = require("./math.js")
// console.log(math.addNum(10, 10))
