
class App
{
    // Penser à remplacer par les données récupérées dans le json
    constructor()
    {
        this.mediaSection = document.querySelector(".photographer_media");
        this.photographerApi = new PhotographerApi('./data/photographers.json')         
    }


    async main() 
    {
            //chercher url search param pour plus tard w3school
            const queryString_url_id = window.location.search;
            // transformation de l' id en nombre et couper pour enlever '?' lors de la recuperation
            var leId = Number(queryString_url_id.slice(1));
            
        const mediaData = await this.photographerApi.getPhotographers()
       
        // filtrer les data avec le id de l' image cliqué
        const photographer = mediaData.photographers.filter(photographer => photographer.id === leId)
        const medias = mediaData.media.filter(medias => medias.photographerId === leId)

        // tableau de likes
        const sumLikes = Array.from(medias, e => parseFloat(e.likes));
        allLikes(sumLikes)
           

        medias.forEach((media) => {
           
            const mediaModel = new Medias(media);
            const getUserCardDOM = mediaModel.render(photographer[0], media);
             // gestion affichage video / photo
             const multiMedia = new multimedia(media,photographer[0]);
             const getUserCardDOMMedia = multiMedia.render(media,photographer[0].name);

             //gestion affichage likes et prix
             const likesPrice = new LikesPrice(media,photographer[0]);
             const getUserCardDOMMedialikesprice = likesPrice.render(media,photographer[0]);

             this.mediaSection.appendChild(getUserCardDOMMedia);

        });
    
    }
}


const app = new App()
app.main();

