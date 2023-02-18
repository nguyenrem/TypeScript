function repeat(input: string, times: number): string {
    // create a new array that with length of `times`
    // and set each element to the value of the `input` string
    const instances = new Array(times).fill(input);
    // join the elements of the array together
    const result = instances.join("");
    return result;
}
console.log(`repeat("War", 3 ):`);
console.log(repeat("War", 3));

console.log(`repeat("rye", 1):`);
console.log(repeat("rye", 1));

console.log(`repeat("bell", 0):`);
console.log(repeat("bell", 0));