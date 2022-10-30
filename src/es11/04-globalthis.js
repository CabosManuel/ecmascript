// Estando en el navegador
console.log(window);
// Window {window: Window {...}, self: Window ...}

// Estando en Node
console.log(global);

// Estando en WebWorker
console.log(self);

// En cualquier entorno
console.log(globalThis);