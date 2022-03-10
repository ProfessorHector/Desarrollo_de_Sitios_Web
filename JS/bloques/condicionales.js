/**
 * Condicionales
 */

//if,else
let a = 100;
let b = 15;

if (a < b) {
    console.log("a es menor que b");
}else{
    console.log("b es menor que a");
}


let queso = '';

if (queso) {
  console.log('¡Siii! Hay queso para hacer tostadas con queso.');
} else {
  console.log('No hay tostadas con queso para ti hoy 😢');
}

//Ejemplo con if, elseif & else
let seleccionar = document.querySelector('select');
let parrafo = document.querySelector('p');

seleccionar.addEventListener('change', setWeather);

function establecerClima() {
  let eleccion = seleccionar.value;

  if (eleccion === 'soleado') {
    parrafo.textContent = 'El día esta agradable y soleado hoy. ¡Use pantalones cortos! Ve a la playa o al parque y come un helado.';
  } else if (eleccion === 'lluvioso') {
    parrafo.textContent = 'Está lloviendo, tome un abrigo para lluvia y un paraguas, y no se quede por fuera mucho tiempo.';
  } else if (eleccion === 'nevando') {
    parrafo.textContent = 'Está nevando ─ ¡está congelando! Lo mejor es quedarse en casa con una taza caliente de chocolate, o hacer un muñeco de nieve.';
  } else if (eleccion === 'nublado') {
    parrafo.textContent = 'No está lloviendo, pero el cielo está gris y nublado; podría llover en cualquier momento, así que lleve un saco solo por si acaso.';
  } else {
    parrafo.textContent = '';
  }
}


//Ejemplo con switch case
function setWeather() {
  let choice = seleccionar.value;

  switch (choice) {
    case 'sunny':
      parrafo.textContent = 'It is nice and sunny outside today. Wear shorts! Go to the beach, or the park, and get an ice cream.';
      break;
    case 'rainy':
      parrafo.textContent = 'Rain is falling outside; take a rain coat and a brolly, and don\'t stay out for too long.';
      break;
    case 'snowing':
      parrafo.textContent = 'The snow is coming down — it is freezing! Best to stay in with a cup of hot chocolate, or go build a snowman.';
      break;
    case 'overcast':
      parrafo.textContent = 'It isn\'t raining, but the sky is grey and gloomy; it could turn any minute, so take a rain coat just in case.';
      break;
    default:
      parrafo.textContent = '';
  }
}

//Operador ternario
let isBirthday = true;
let greeting = ( isBirthday ) ? 'Happy Birthday!' : 'Good Morning';
console.log(greeting);