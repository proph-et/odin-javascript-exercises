const palindromes = function (inputString) {
  inputString = inputString.toLowerCase();
  inputString = inputString.replace(/\W/g, '');
  let tempString = inputString.split('').reverse().join('');
  return inputString === tempString;
};

// Do not edit below this line
module.exports = palindromes;
