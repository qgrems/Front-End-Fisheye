//Mettre le code JavaScript lié à la page photographer.html
async function getPhotographers() {
    // Penser à remplacer par les données récupérées dans le json
    fetch('data/photographers.json')
    .then(response => response.json())
    .then(data => {
       
         // data contient à la fois les données de photographes et les médias
        displayData(data)

    }); 
}
async function getId(){

}

async function displayData(data) {
    // recuperation de l ' ID

    //chercher url search param pour plus tard w3school
    const queryString_url_id = window.location.search;
    // transformation de l' id en nombre et couper pour enlever '?' lors de la recuperation
    var leId = Number(queryString_url_id.slice(1)); 
 
    var ident = document.getElementById('id');
    const photographersSection = document.querySelector(".photographer_media");
    const photographer = data.photographers.filter(photographer => photographer.id === leId)
    const medias = data.media.filter(medias => medias.photographerId === leId)
 
    medias.forEach((media) => {

        const photographerModel = mediaFactory(photographer[0], media);
        const userCardDOM = photographerModel.getUserCardDOM();
        photographersSection.appendChild(userCardDOM);
    });
 
};

async function init() {
    // Récupère les datas des photographes
  
    getPhotographers()

    
};

init();