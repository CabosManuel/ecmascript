// Spread Operator (Operador de propagación) ------------
let team1 = ['Manuel', 'Alejandro', 'Oscar'];
let team2 = ['Valeria', 'Jessica', 'Camila'];

let education = ['David', ...team1, ...team2];
console.log(education);

// Object Spread Operator
let person = {name: 'Manuel', age: 22}
let country = 'PE'

let data = {id: 1, ...person, country}
console.log(data);

// Rest parametes 
function sum(num, ...values) {
  console.log(values);
  console.log(num + values[0]);

  return num + values[1];
}

sum(1, 1, 2, 3, 4, 5)
