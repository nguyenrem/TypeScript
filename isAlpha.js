"use strict";
function isAlpha(input) {
    // regex that will match any string that only has upper and lowercase letters 
    const alphaRegex = /^[a-z]*$/i;
    // test our input using the regex
    const result = alphaRegex.test(input);
    return result;
}
console.log(`isAlpha("War and Peace"):`);
console.log(isAlpha("War and Peace"));
console.log(`isAlpha("Atonement"):`);
console.log(isAlpha("Atonement"));
console.log(`isAlpha("1Q84"):`);
console.log(isAlpha("1Q84"));
