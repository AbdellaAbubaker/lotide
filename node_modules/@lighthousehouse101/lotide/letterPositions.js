const letterPositions = function(sentence) {
    
    // logic to update results here
    // const strold = "light house in the house"
    // const str = (strold.split(" ").join(""))
    const str = "lighthouse in the house"

    // console.log(str)
    // console.log(str.split(" "))
    // console.log(str.split(" ").join(""))
    const results = {};

    for (let position = 0; position <str.length; position++) {
        // results[position] = 1
        // results[str] = 1 
        var letter = str[position]
        if (letter === " ") {
            continue
        }
    //    1. Create if statement to store repeated letters 
    //    2. How do you know if the letter has been repeated ?

        if (letter in results) {
            // console.log("We found a a repeated letter, " + letter)
        

            // 1. Array.push('value')
            // 2. array.push(position)
            // 3. results[letter].push(position)
            results[letter].push(position)
        }
        else {
            // if (results[letter])
        // console.log(position)

        // Placed the key and position together into the object 
        results[letter] = [position] 
        }

//         console.log(letter + " " +  position)
//  console.log("These are the reslts", results) 
  };
//     results.key1 = 1
//    results["key2"] = "Value"

//  console.log("These are the reslts", results) 
  return results;
}

const output = letterPositions()

console.log("This is the" , output)
//   const eqArrays = function (arr0, arr1) {

//     if (arr0.length === 0 || arr1.length === 0) {
//         return false
//     }
//     if (arr0.length !== arr1.length) {
//         return false
//     } else {
//         for (let i = 0; i < arr0.length; i++) {
//             if (arr0[i] !== arr1[i]) {
//                 return false
//             }
//         }
//     }
//     return true
// }


const assertEqual = function (actual, expected) {

    if (actual === expected) {
        console.log("Assertion passed: actual === expected")
    } else {
        console.log("Assertion passed: actual !== expected")
    }
};


// assertEqual(("hello").e, [1]);
// l 0
// i 1
// g 2
// h 3
// t 4
//   5
// h 6
// o 7
// u 8
// s 9
// e 10
//   11
// i 12
// n 13
//   14
// t 15
// h 16
// e 17
//   18
// h 19
// o 20
// u 21
// s 22
// e 23