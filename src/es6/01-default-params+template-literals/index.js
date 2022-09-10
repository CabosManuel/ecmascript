// Default parameters -------------------
function newFunction(name, age, country) {
  var name = name || 'Manuel';
  var age = age || 22;
  var country = country || 'PE'
  console.log(name, age, country);
}

// es6
function newFunction2(name = 'Manuel', age = 22, country = 'PE') {
  console.log(name, age, country);
}

newFunction2();
newFunction2('Alejandro', 23, 'CO');

// Template Literals ------------------
let hello = 'Hello';
let world = 'World';
let epicPhrase = hello + ' ' + world;
console.log(epicPhrase);

// es6
let epicPhrase2 = `${hello} ${world} 2`;
console.log(epicPhrase2);