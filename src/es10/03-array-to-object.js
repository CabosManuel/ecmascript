const entries = [
  ['name', 'Manuel'],
  ['age',22]
];

console.log(entries); // [ ['name', 'Manuel'], ['age', 22] ]
console.log(Object.fromEntries(entries)); // { name:"Manuel" , age:22  }