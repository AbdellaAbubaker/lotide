// FUNCTION IMPLEMENTATION
const assertEqual = function (actual, expected) {
    if (actual === expected) {
        console.log("Assertion passed: actual === expected");
    } else {
        console.log("Assertion passed: actual !== expected");
    }
}
const findKeyByValue = function (object, value) {
    // 1. Create for of loop to scan the object 
    // 2. Compare the values that is coming from the key aganist test code 
    // 3. Return the key if the vavlue found 

    for (key of Object.keys(object)) {
        
        if (object[key] === value)
            return key;
    }
    return undefined;
}

// TEST CODE
const bestTVShowsByGenre = {
    sci_fi: "The Expanse",
    comedy: "Brooklyn Nine-Nine",
    drama: "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);

// 1.Create a function findKeyByValue that has two parameters (one {} + value)
// 2. Should return the first key 


