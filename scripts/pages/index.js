
async function getPhotographers() {
    // Penser à remplacer par les données récupérées dans le json
    fetch('data/photographers.json')
    .then(response => response.json())
    .then(data => {
        console.log(data); // data contient à la fois les données de photographes et les médias
        displayData(data.photographers)
    }); 
}

async function displayData(photographers) {
    
    const photographersSection = document.querySelector(".photographer_section");
    
        photographers.forEach((photographer) => {
        const photographerModel = photographerFactory(photographer);
        const userCardDOM = photographerModel.getUserCardDOM();
        photographersSection.appendChild(userCardDOM);
    });
 
};

async function init() {
    // Récupère les datas des photographes
    
    getPhotographers()

    
};

init();





