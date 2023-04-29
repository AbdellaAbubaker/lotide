const assertEqual = require('./assertEqual')



_.tail(["Hello", "Lighthouse", "Labs"], "Hello")

function tail() {

    let outputArray = [];
    for (let index = 1; index < array.length; index++) {
        const element = array[index];
        outputArray.push(element);

    }
    return outputArray;
};
tail()


module.exports = assertEqual;
// const words = ["Yo Yo", "Lighthouse", "Labs"];
// tail(words); // no need to capture the return value since we are not checking it
// assertEqual(words.length, 3); // original array should still have 3 elements!