# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @AbdellaAbubaker/lotide`

**Require it:**

`const _ = require('@username/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertEqual`: To test between statements whether statement t/f
* `takeUntil`: Takes two parameters and loops through the array to see if callback function returns true value
* `middle`: Finding out if the array divisble by 2 & finding the size of the array length
* `head` : Takes an array as an arguement and returns the first element
* `eqObjects`: Comparing two objects keys and values and return if the keys and values are either t/f 
* `tail` : Removes the first element of an array and returns a new array with the first element in the old array removed
* `without` : Takes in two arrays as arguments and iterates throguh one array to see if  any of the elements match and return a new array with all the matched elements
`findKey`: Iterates over object and a callback function as an argument. If Callback returns truthy value of any values, If it doesnt return undefined is returned 
* `findKeyByValue` : Iterates each key, the function has two arguments values and keys and compares the value 
`letterPositions` : Takes input as a string 
* `flatten`: Takes a nested array as an argument and returns a new array by creating one single array


