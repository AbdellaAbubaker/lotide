const takeUntil = function(array, callback) {
    const results = [];
    for (let item of array) {
        if (callback(item)){
            return results
        }
        results.push(item)
    }
        return results
}
  
  const eqArrays = function(actual, expected) {
    if (actual.length !== expected.length) {
      return false;
    }
    for (let i = 0; i < actual.length; i++) {
      if (actual[i] !== expected[i]) {
        return false;
      }
    }
    return true;
  };
  
  const assertArraysEqual = function(actual, expected) {
    if (eqArrays(actual, expected)) {
      console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
    } else {
      console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
    }
  };

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
// console.log(results1);
