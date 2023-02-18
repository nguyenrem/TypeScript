function toWords(input: string): string[] {
    // split the words using a regex that will match any occurence of
    // a space, underscore or dash characters
    const words = input.split(/[ _-]/);
    return words;
}
console.log(`toWords("War and Peace"):`);
console.log(toWords("War and Peace"));

console.log(`toWords("catcher-in-the-rye"):`);
console.log(toWords("catcher-in-the-rye"));

console.log(`toWords("for_whom the-bell-tolls"):`);
console.log(toWords("for_whom the-bell-tolls"));