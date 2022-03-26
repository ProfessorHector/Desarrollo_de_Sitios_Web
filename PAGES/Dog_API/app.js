// Se declara la lista de manera global para poder utilizarla en todo el código
const ul_breeds = document.getElementById("ul_breeds");

// Esta función se encarga de obtener los datos del servidor y despues los manda a la función se parseJsonResponse
function getDogBreeds() {
    const allBreedsApiUrl = "https://dog.ceo/api/breeds/list/all";

    // Se utiliza la API de Fetch para hacer la petición
    // también se utilizan las promesas 
    fetch(allBreedsApiUrl)
        .then(function (response) {
            // se obtienen los datos de la respuesta y se convierte a formato json
            return response.json();
        })
        .then(function (json) {
            // ahora tenemos objeto json y posteriormente podremos actualizar los datos en el html
            console.log(json);

            // pasamos el objeto json a la función que se encargará de mostrar los datos en html
            parseJsonResponse(json);
        })
        .catch(function (error) {
            // si ocurre algun error esta función se ejecutará para mostrar el error
            console.log(error);

        });
}

// Esta función es la que se encarga de mostrar los datos en html
function parseJsonResponse(json) {

    // obtiene los datos de las razas
    var allBreedsData = json.message;

    // solamente se necesitan los nombres de las llaves ya que son los mismos nombres de las razas
    // entonces se utilizara la función Object.keys(object) para obtener el listado de todas las llaves
    var breedsList = Object.keys(allBreedsData);

    // vaciar la lista en caso de que tenga algo
    ul_breeds.innerHTML = "";

    // En esta parte se va a iterar la lista de llaves para despúes colocarlas en las etiquetas <li> en html
    breedsList.forEach(function (breed) {

        var listItemHtml = `<li>${breed}</li>`;

        ul_breeds.innerHTML += listItemHtml;
    })
}

// Se llama la función de obtener las razas de perros al cargar la página
getDogBreeds();


const img_container = document.getElementById("img_container");

// esta función se encarga de obtener las imágenes de acuerdo a la raza seleccionada
function getDogImages(breedName) {

    const dogImagesUrl = `https://dog.ceo/api/breed/${breedName}/images`;


    fetch(dogImagesUrl)
        .then(function (response) {

            return response.json();
        })
        .then(function (json) {

            console.log(json);


            showImagesInHtml(json);
        })
        .catch(function (error) {

            console.log(error);

        });
}

// Esta función es la que se encarga de mostrar las imágenes en html
function showImagesInHtml(json) {
    var imageList = json.message;

    img_container.innerHTML = "";
    imageList.forEach(function (image) {

        img_container.innerHTML += `<img class="gridItem" src="${image}"></img>`
    })
}

ul_breeds.addEventListener("click", function (e) {
    // Se comprueba si hemos dado click al elemento <li>
    if (e.target && e.target.nodeName == "LI") {
        // Se actualiza la lista de imágenes
        getDogImages(e.target.innerHTML.trim());
        console.log(e.target.innerHTML.trim());
    }
})
