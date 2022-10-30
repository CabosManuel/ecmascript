const users = {
  cabos: {
    country: 'PE'
  },
  oscar: {
    country: 'MX'
  }
}

console.log(users.cabos.country); // PE
console.log(users.cabos.age); // undefined
console.log(users.ana?.country); // undefined
//detiene el 'encadenamiento' en ana, retornando undefined