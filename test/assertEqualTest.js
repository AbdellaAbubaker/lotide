const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');





// Test cases 
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
const words = ["Yo Yo", "Lighthouse", "Labs"];
assertEqual(words.length, 3); // original array should still have 3 elements!
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), false);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), true);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3", "9"]), false);
assertEqual(eqArrays([], []), false);
assertEqual(eqArrays([], ["1"]), false);