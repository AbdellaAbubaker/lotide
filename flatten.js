const flatten = function(array) {
    const outputArray = [];
    for (const element of array) {
      if (Array.isArray(element)) {
        outputArray.push(...element);
      } else {
        outputArray.push(element);
      }
    }
    return outputArray;
  };

const inputArray = [1, 2, [3, 4], 5, [6]];
const outputArray = flatten(inputArray);
console.log(outputArray);


module.exports = flatten