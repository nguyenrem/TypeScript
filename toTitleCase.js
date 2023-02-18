"use strict";
/** ---------- toTitleCase ---------- **/
function toTitleCase(input) {
    // split the string into an array on every occurence of the space character
    const words = input.split(" ");
    const titleWords = [];
    // loop through each word
    for (const word of words) {
        // take the first character using `slice` and convert it to uppercase
        const initial = word.slice(0, 1).toLocaleUpperCase();
        // take the rest of the character using `slice` and convert them to lowercase
        const rest = word.slice(1).toLocaleLowerCase();
        // join the initial and the rest and add them to the resulting array
        titleWords.push(`${initial}${rest}`);
    }
    // join all the processed words
    const result = titleWords.join(" ");
    return result;
}
console.log(`toTitleCase("war AND peace"):`);
console.log(toTitleCase("war AND peace"));
console.log(`toTitleCase("Catcher in the Rye"):`);
console.log(toTitleCase("Catcher in the Rye"));
console.log(`toTitleCase("tO kILL A mOCKINGBIRD"):`);
console.log(toTitleCase("tO kILL A mOCKINGBIRD"));
