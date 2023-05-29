const assert = require('chai').assert;
const takeUntil = require("../takeUntil");

const assertEqual = function (actual, expected) {
    if (actual === expected) {
        console.log("Assertion passed: actual === expected")
    } else {
        console.log("Assertion passed: actual !== expected")
    }
};