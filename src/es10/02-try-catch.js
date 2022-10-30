try {
  hello();
} catch (error) {
  console.log(error); // ReferenceError: hello is not defined
}

try {
  hello();
} catch {
  console.log('Error al procesar!'); // Error al procesar!
}