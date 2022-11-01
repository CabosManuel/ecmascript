const t = 'Estoy aprendiendo ECMAScript, con el curso de ECMAScript de Platzi';

console.log(t.replaceAll('ECMAScript', 'ES')); // Estoy aprendiendo ES, con el curso de ES de Platzi
console.log(t.replaceAll(/e/g, '*')); // Estoy apr*ndi*ndo ECMAScript, con *l curso d* ECMAScript d* Platzi