// FUNCTION IMPLEMENTATION

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

module.exports = eqObjects

        // Test case 

        // const shirtObject = {
        //     color: "red",
        //     size: "medium"
        // };
        // const anotherShirtObject = {
        //     size: "medium",
        //     color: "red"
        // };
        // assertEqual(eqObjects(shirtObject, anotherShirtObject), true);


        // const longSleeveShirtObject = {
        //     size: "medium",
        //     color: "red",
        //     sleeveLength: "long"
        // };
        // assertEqual(eqObjects(shirtObject, longSleeveShirtObject), false)


        // const colorBrandObject = {
        //     size: "medium",
        //     color: "red",
        //     sleeveLength: "long",
        //     brand: "Canada Goose"
        // };
        // assertEqual(eqObjects(shirtObject, colorBrandObject), undefined);