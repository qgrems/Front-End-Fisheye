class App {
    // Penser à remplacer par les données récupérées dans le json
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



        let tabMedia = []
        const triage = new Triage()
        this.tri.appendChild(triage.render())

  
        let value = 0;    
        const triage2 = document.getElementById('valuetriage')
       
       

        medias.forEach((media) => {
            let mediaModel;

            if (media.video) 
            {
                mediaModel = multimedia(media, photographer[0], sliceName, 'video')
            }
            else 
            {
                mediaModel = multimedia(media, photographer[0], sliceName, 'image')
            }
            this.mediaSection.appendChild(mediaModel.render());
           
            triage2.addEventListener('change', (media,mediaSection)=>{
                value = triage2.value 
                let model
                if (value ===  '2')
                {
                    const sortLikes = medias.sort((a,b)=> a.likes - b.likes)
                    sortLikes.forEach((media) => {
                    if (media.video) 
                    {
                        model = multimedia(media, photographer[0], sliceName, 'video')
                    }
                    else 
                    {
                        model = multimedia(media, photographer[0], sliceName, 'image')
                    }
                    this.mediaSection.appendChild(model.render());
                 })
                 
                }
                if (value ===  '3')
                {
                    const sortData = medias.sort(function(a, b){
                        return a.date.localeCompare(b.date);
                    })
                    sortData.forEach((media) => {
                        if (media.video) 
                        {
                            mediaModel = multimedia(media, photographer[0], sliceName, 'video')
                        }
                        else 
                        {
                            mediaModel = multimedia(media, photographer[0], sliceName, 'image')
                        }
                    })
                    this.mediaSection.appendChild(mediaModel.render());
                }
                if (value ===  '4')
                {
                    const sortName = medias.sort(function(a, b){
                        return a.title.localeCompare(b.title);
                    })
                    sortName.forEach((media) => {
                        if (media.video) 
                        {
                            mediaModel = multimedia(media, photographer[0], sliceName, 'video')
                        }
                        else 
                        {
                            mediaModel = multimedia(media, photographer[0], sliceName, 'image')
                        }
                    })
                    this.mediaSection.appendChild(mediaModel.render());
                }
                
                tabMedia.push(mediaModel)
            })

        });

        this.likesMedia = new IncrementationLikes(photographerModel,tabMedia,sumLikes)
        this.modalMedia = new ModalMedia(photographerModel, tabMedia)

    }
}


const app = new App()
app.main();