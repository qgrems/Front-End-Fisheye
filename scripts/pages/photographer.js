class App {
    constructor() {
        this.mediaSection = document.querySelector(".photographer_media");
        this.photographerHeader = document.querySelector(".photograph-header");
        this.likePrice = document.querySelector("#container_like_price");
        this.modalPicture = document.querySelector("#picture_modal");
        this.photographerApi = new PhotographerApi('./data/photographers.json');
        this.modalMedia = ""
        this.tri =document.querySelector(".triage");
    }


    async main() {
        //chercher url search param pour plus tard w3school
        const queryString_url_id = window.location.search;
        // transformation de l' id en nombre et couper pour enlever '?' lors de la recuperation
        var leId = Number(queryString_url_id.slice(1));

        const mediaData = await this.photographerApi.getPhotographers()

        // filtrer les data avec le id de l' image cliqué
        const photographer = mediaData.photographers.filter(photographer => photographer.id === leId)
        const medias = mediaData.media.filter(medias => medias.photographerId === leId)


    

        //header
        const photographerModel = new Photographers(photographer[0])
        this.photographerHeader.appendChild(photographerModel.renderBandeau())

        // recuperation du name slice dans une variable
        const sliceName = slice_name(photographer[0].name)

        // image modal
        let indexMedia
        indexMedia = medias.findIndex(e => e.id === medias[0].id)

            // tableau de likes
            const sumLikes = Array.from(medias, e => parseFloat(e.likes));


            const likePriceModel = new LikesPrice(allLikes(sumLikes), photographer[0].price)
            this.likePrice.appendChild(likePriceModel.render())

        //tri
        const triage = new Triage()
        this.tri.appendChild(triage.render())

  
        let value = "0" ;
        var result = 0
        const triage2 = document.getElementById('valuetriage')

        let tableauMedia = []
        tableauMedia.push(medias)

        

    
       
        let tabMedia = []
        medias.forEach((media) => {
            let mediaModel;
            //creation des cards pour l'affichage normal
        if (value === "0")
        {
            
            if (media.video) 
            {
                mediaModel = new multimedia(media, photographer[0], sliceName, 'video',tabIndex(tableauMedia))
            }
            else 
            {
                mediaModel = new multimedia(media, photographer[0], sliceName, 'image',tabIndex(tableauMedia))
            }
            
            this.mediaSection.appendChild(mediaModel.render());
        }

        //tri en fonction de la valeur lu
        triage2.addEventListener('change', (media,mediaSection)=>{
            //remise a 0 de la section photographer media
            document.querySelector(".photographer_media").innerHTML=""
            let model
            value = triage2.value 
            
            if (value ===  "1") {
                //tri en fonction du nombre de likes
                result = medias.sort((a,b)=> a.likes - b.likes)
            }

            if (value ===  '2') {
                //tri en fonction de la date des photos
                 result = medias.sort(function(a, b){
                     return a.date.localeCompare(b.date);
                 })
            }
            if (value ===  '3') {
                result = medias.sort(function(a, b) {
                    //tri en fonction du titre des photos
                    return a.title.localeCompare(b.title);
                })
               
            }
            let tabmedia = [];

            //nouvel affichage pour changer la valeur des emplacement des images pour que les likes s'incremente au bon endroit en fonction du resultat des valeurs
            result.forEach((media) => {
                let mediaModel;
              
                if (media.video) 
                {
                    mediaModel =  new multimedia(media, photographer[0], sliceName, 'video',tabIndex(tableauMedia))  
                }
                else 
                {
                    mediaModel =  new multimedia(media, photographer[0], sliceName, 'image',tabIndex(tableauMedia))
                    
                }
                
                this.mediaSection.appendChild(mediaModel.render());
                tabmedia.push(mediaModel)
                tabIndex(tabmedia)    
                this.likesMedia = new IncrementationLikes(photographerModel,tabmedia,sumLikes) 
                
            });
            
        }) 
        //affichage normal
        tabMedia.push(mediaModel)
        tabIndex(tabMedia)    
        this.likesMedia = new IncrementationLikes(photographerModel,tabMedia,sumLikes)
        this.modalMedia = new ModalMedia(photographerModel, tabMedia,media)
              
    //ouverture du modal photo avec la touche entrée
    const keyCodes = {
        escape:27,
        enter:13,
    };

    
    document.body.addEventListener('keydown', (event) => {
        if (event.which === keyCodes.escape) {
            if(app.modalMedia.display)
            {
                app.modalMedia.closeModalPhoto();
            } 
        } 
    })
        
    });
    }
}


const app = new App()
app.main();