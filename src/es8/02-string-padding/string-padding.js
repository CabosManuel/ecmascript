const string = 'Hello';

let stringPadStart = string.padStart(10,'*')
console.log(stringPadStart); // *****Hello

console.log(stringPadStart.padEnd(20,'*')); // *****Hello**********