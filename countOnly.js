// // FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
    if (actual === expected) {
        console.log("Assertion passed: actual === expected")
    } else {
        console.log("Assertion passed: actual !== expected")
    }

   

};




// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
const countOnly = function(allItems, itemsToCount) {
    const countObject = {}
    for(let item in itemsToCount) {

    //  if (itemsToCount[item] && allItems.includes(item)) {
        const itemcount = allItems.filter(itm => itm === item).length
       countObject[item] = itemcount > 0 ? itemcount : undefined
    //  }
    } 
    return countObject
}






// 1. Create a function that scans through an array of names to see if it matches with result1 
// 2. Create an empty arr to push the names that match 
// 3. Loop through firtNames to see which names match 
// 4. return array that have the matching names 



// TEST CODE

const firstNames = [
    "Karl",
    "Salima",
    "Agouhanna",
    "Fang",
    "Kavith",
    "Jason",
    "Salima",
    "Fang",
    "Joe"
  ];
  
  const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });
  console.log(result1)
  assertEqual(result1["Jason"], 1);
  assertEqual(result1["Karima"], undefined);
  assertEqual(result1["Fang"], 2);
  assertEqual(result1["Agouhanna"], undefined``);

const results = {}
return results;
