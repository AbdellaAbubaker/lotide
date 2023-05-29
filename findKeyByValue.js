

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


const bestTVShowsByGenre = {
    sci_fi: "The Expanse",
    comedy: "Brooklyn Nine-Nine",
    drama: "The Wire"
};

module.exports = findKeyByValue




