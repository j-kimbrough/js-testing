var Calculator = require("./Calculator.js");//.js is optional
var calc = new Calculator();
let addResult = calc.add(2,1);
let divideResult = calc.divide(8,4);
let output = `1 + 2 = ${addResult} , 8/4 = ${divideResult} `;
console.log(output);