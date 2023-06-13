// FUNCTION IMPLEMENTATION
const assertEqual = function (actual, expected) {
    if (actual === expected) {
        console.log("Assertion passed: actual === expected")
    } else {
        console.log("Assertion passed: actual !== expected")
    }


};

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);



const countLetters = function () {
    const str = "light house in the house"
    const output = {}

    for (const letter of str) {

        if (letter === " ")
            continue
        if (output[letter])
            output[letter]++;
        else output[letter] = 1

    }
    return output


}
console.log(countLetters())
// 1. Create a function that takes a sentence as a string 
// 2. Create an empty obj
// 3. Loop through the string 