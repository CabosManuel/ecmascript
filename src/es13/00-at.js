const array = ['ichi','ni','san','shi','go','roku'];
// positivo      1,     2,   3,    4,   5,  length
// negativo   -length, -5,  -4,   -3,  -2,   -1

console.log(array[array.length-1]); // kyu
console.log(array[-1]); // undefined
console.log(array.at(-4)); // san
console.log(array.at(-1)); // kyu