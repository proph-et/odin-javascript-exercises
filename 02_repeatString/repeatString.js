const repeatString = function(inputString, count) {
  if (count < 0) {
    return "ERROR";
  }
  let repeatedString = '';
  for( let i = 0 ; i < count; i++ ) {
    repeatedString += inputString;
  }
  return repeatedString;
};

// Do not edit below this line
module.exports = repeatString;
