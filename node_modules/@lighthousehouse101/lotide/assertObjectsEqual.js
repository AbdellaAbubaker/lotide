const eqObjects = function (object1, object2) {
    //    1. Find if the obejcts are equal in length by making the object in array 
    //    2. If ob1.length !== obj2.length return false, else 
    let keys1 = Object.keys(object1);
    let keys2 = Object.keys(object2);

    if (keys1.length !== keys2.length) {
        return false;
    }
    for (let key of keys1) {
        if (Array.isArray(object1[key])) {
            if (Array.isArray(object2[key])) {
                if (eqArrays(object1[key], object2[key]) === false) {
                    return false
                }
            } else if (object1[key] !== object2[key]) {
                return false
            }
        }
        return true
    }


    if (array1.length !== array2.length) {
        return false;
    }
    if (array1.length !== array2.length) {
        return false;
    }
}


const assertObjectsEqual = function (actual, expected) {
    // Implement me!
    const inspect = require('util').inspect;

    if (eqObjects(actual, expected) === true) {
        console.log('✅✅✅ Assertation passed:  , ${inspect(actual)} === ${inspect(expected)} ');
    } else {
        console.log('🛑🛑🛑 Asseration failed: ${actual} ! == ${expected}');

    }
};



// Test code 

assertObjectsEqual({ a: '1', b: 2 } === { b: 2, a: '1' });
  