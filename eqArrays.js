// 1. Create a function that take on two arrays 
// 2. Create an if statement to see if the two arrays are the same
// 3. If the arguements doesnt return array, return false/error 
// 4. If the are two arrays and the length are not the same, return false 
// 5. Start looping the first array and use the same index to check the item in the second array 
const assertEqual = require('./assertEqual')
const eqArrays = function (arr0, arr1) {

    if (arr0.length === 0 || arr1.length === 0) {
        return false
    }
    if (arr0.length !== arr1.length) {
        return false
    } else {
        for (let i = 0; i < arr0.length; i++) {
            if (arr0[i] !== arr1[i]) {
                return false

            }

        }

    }
    return true
}

// TEST CODE

module.exports = eqArrays;
// assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), false);
// assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), true);
// assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3", "9"]), false);
// assertEqual(eqArrays([], []), false);
// assertEqual(eqArrays([], ["1"]), false);