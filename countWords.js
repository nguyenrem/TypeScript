"use strict";
function countWords(input) {
    // split the words using a regex that will match any occurence of
    // a space, underscore or dash characters
    const words = input.split(/[ _-]/);
    // return the lenght of the array that is the result of the split
    return words.length;
}
console.log(`countWords("War and Peace"):`);
console.log(countWords("War and Peace"));
console.log(`countWords("catcher-in-the-rye"):`);
console.log(countWords("catcher-in-the-rye"));
console.log(`countWords("for_whom the-bell-tolls"):`);
console.log(countWords("for_whom the-bell-tolls"));
