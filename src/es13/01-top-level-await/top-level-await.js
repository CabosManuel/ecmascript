// TODO: Instalar dependencia fetch para hacer peticiones
// npm install node-fetch
import fetch from 'node-fetch';

const response = await fetch('https://api.escuelajs.co/api/v1/products'); // ya no se necesita encapsular en una función await
const products = await response.json();

export { products };