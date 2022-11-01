const button = document.getElementById('btnEjecutar');

button.addEventListener('click', async function(){
  const module = await import('./module.js'); // Importar el modulo en una línea, después de await
  console.log(module);

  module.hello(); // Ejecutar función del módulo
})