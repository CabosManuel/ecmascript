const user = {username: 'Cabos', age: 22, country: 'PE'};
const { username, ...values} = user; // ... -> "Lo demás que vaya a " values

console.log(user); // {username: 'Cabos', age: 22, country: 'PE'}
console.log(username); // Cabos
console.log(values); // {age: 22, country: 'PE'}

// El = user a la derecha es para sacar los datos de user


// COPIAR UN OBJETO
const objeto = {
  nombre: "Andres",
  age: 23,
}

const usuario = {
    ...objeto,
    plataforma: "Platzi"
}