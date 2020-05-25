// Test Driven Development Exercises
//
// Q1 Create test cases for a function called multiplyNumbers that should take 2 numbers as parameters and return the product of those numbers.
const { expect } = require("chai");
// const { multiplyNumbers } = require("../src/Common/Numbers");

function multiplyNumbers(num1, num2) {
    if (isNaN(num1) || isNaN(num2)) {
        throw new Error("num1 and num2 must both be numbers");
    } multiplyNumbers(num1, num2)
    return parseFloat(num1) * parseFloat(num2);
}
console.log(multiplyNumbers(10 * 2));