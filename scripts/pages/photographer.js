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
async function displayData(data) {

    var ident = document.getElementById('id');
    const photographersSection = document.querySelector(".photographer_media");
    const photographer = data.photographers.filter(photographer => photographer.id)
    const medias = data.media.filter(img => img.photographerId)
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