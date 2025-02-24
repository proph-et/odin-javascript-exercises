const removeFromArray = function (inputArray, ...itemsToRemove) {
  return inputArray.filter(item => !itemsToRemove.includes(item));
};

// Do not edit below this line
module.exports = removeFromArray;
