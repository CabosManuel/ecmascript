async function* generator() {
  yield await Promise.resolve(1); //
  yield await Promise.resolve(2);
  yield await Promise.resolve(3);
}

const gen = generator();
gen.next().then(response => console.log(response.value)); // 1
gen.next().then(response => console.log(response.value)); // 2
gen.next().then(response => console.log(response.value)); // 3
console.log('-=- After -=- '); // sale primero