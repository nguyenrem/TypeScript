"use strict";
function isBlank(input) {
    // test if the first character of our input is an empty space
    while (input[0] === " ") {
        // successively slice off the first character of the input
        input = input.slice(1);
    }
    // the loop will stop on the first character that is not a space.
    // if we're left with an empty string, we only have spaces in the input
    const result = input === "";
    return result;
}
console.log(`isBlank("War and Peace"):`);
console.log(isBlank("War and Peace"));
console.log(`isBlank("       "):`);
console.log(isBlank("       "));
console.log(`isBlank(""):`);
console.log(isBlank(""));
