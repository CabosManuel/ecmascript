async function arrayOfNames(names) {
  for await (const name of names) {
    console.log(name);
  }
}

const names = arrayOfNames(['Manuel', 'Alejandro', 'Oscar'])
console.log('After'); // Sale primero