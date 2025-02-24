const add = function (inputA, inputB) {
  return inputA + inputB;
};

const subtract = function (inputA, inputB) {
  return inputA - inputB;
};

const sum = function (inputArray) {
  let sum = 0;
  inputArray.forEach((item) => {
    sum += item;
  })
  return sum;
};

const multiply = function (inputArray) {
  let product = 1;
  inputArray.forEach((item) => {
    product *= item;
  })
  return product;
};

const power = function (inputA, inputB) {
  return inputA ** inputB;
};

const factorial = function (inputA) {
  let result = 1;
  for (let i = inputA; i > 0; i--) {
    result *= i;
  }
  return result;

};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
