/**
 * Funciones
 */


const miTexto = 'Soy un string';
const textNuevo = miTexto.replace('string', 'alumno');
console.log(textNuevo);

const myArray = ['I', 'love', 'chocolate', 'frogs'];
const madeAString = myArray.join(' ');
console.log(madeAString);

//Funciones con parametros

function toCelsius(fahrenheit) {
    return (5/9) * (fahrenheit-32);
}

let texto = "La temperatura es " + toCelsius(77) + "° Celsius"; 

console.log(texto);

//Arrow functions

const originals = [1, 2, 3];

const doubled = originals.map(item => item * 2);

console.log(doubled); // [2, 4, 6]

const textBox = document.querySelector("#textBox");
const output = document.querySelector("#output");

textBox.addEventListener('keydown', event => output.textContent = `You pressed "${event.key}".`);

