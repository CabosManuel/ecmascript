function* iterate(array) {
  for (let value of array) {
    yield value;
  }
}

const names = iterate(['Manuel', 'Alejandro', 'Oscar', 'David']);
console.log(names.next().value);