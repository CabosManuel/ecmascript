// let y const -----------------------------
// let
var hola = 'hola';

{
  var globalVar = 'Global var';
}

{
  let globalLet = 'Global let';
  console.log(globalLet);
}

console.log(globalVar);

//const
const a = 'b';
//a = 'a';
console.log(a);

// Multiline ---------------------------------------
let lorem = 'Antes de ES6 se utilizaba "\\n" \n' +
            'para tener multilineas'

// es6
let lorem2 = 
`Ahora con ES6, utilizando las comillas francesas (\`)
y dando saltos de línea ya no hace falta
usar el \\n`

console.log(lorem);
console.log(lorem2);

// Destructuring ----------------------------------
let person = {
  'firstName' : 'Manuel',
  'age': 22,
  'country': 'PE'
};

console.log(person.firstName, person.age, person.country);

// es6
let {firstName, age, country} = person;
console.log(firstName, age, country);

// array destructuring
let fruits = ['Apple', 'Banana']
let [x, y] = fruits;
console.log(x, y); // Apple Banana