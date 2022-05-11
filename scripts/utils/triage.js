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
    const triage2 = document.getElementById('valuetriage')
    triage2.addEventListener('change', (media,mediaSection)=>{
        let model
        value = triage2.value 
        if (value ===  "1")
        {
            console.log(value)
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
        
         if (value ===  '2')
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
        }

        if (value ===  '3')
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
    }) 
      tabMedia.push(mediaModel)
});

this.likesMedia = new IncrementationLikes(photographerModel,tabMedia,sumLikes)
this.modalMedia = new ModalMedia(photographerModel, tabMedia)

}
}


const app = new App()
app.main();