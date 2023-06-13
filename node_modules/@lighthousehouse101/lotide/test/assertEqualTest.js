const assertEqual = require('../assertEqual');





// Test cases 
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), false);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), true);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3", "9"]), false);
assertEqual(eqArrays([], []), false);
assertEqual(eqArrays([], ["1"]), false);