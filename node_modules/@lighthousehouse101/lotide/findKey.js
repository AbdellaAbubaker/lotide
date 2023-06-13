const assertEqual = function(actual, expected) {
    if (actual === expected) {
        console.log("Assertion passed: actual === expected")
    } else {
        console.log("Assertion passed: actual !== expected")
    }

   

};





const findKey = function (object, callback) {
    for (const key in object) {
        if (callback(object[key])){
            return key 
        }
    }
    return undefined
}


//  Scenario 1 
const planet = { 

        "Blue Hill": { stars: 1 },
        "Akaleri":   { stars: 3 },
        "noma":      { stars: 2 },
        "elBulli":   { stars: 3 },
        "Ora":       { stars: 2 },
        "Akelarre":  { stars: 3 }
}


// Scenario 2 

const result2 = findKey(planet, x => x.planet === 4 );
assertEqual(result2, undefined);