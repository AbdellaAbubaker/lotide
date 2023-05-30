const assert = require('chai').assert;
const takeUntil = require("../takeUntil");

const assertEqual = function (actual, expected) {
    if (actual === expected) {
        console.log("Assertion passed: actual === expected")
    } else {
        console.log("Assertion passed: actual !== expected")
    }
};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);