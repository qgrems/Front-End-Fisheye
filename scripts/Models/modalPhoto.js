class ModalPhoto
{
    constructor(sliceName,photographerData, dataImage)
    {
        console.log(sliceName)
        this._name = photographerData.name
        this._id = photographerData.id
        this._image = dataImage.image
        this._slice = sliceName
        this._idImage = dataImage.id
        
    }
    get name()
    {
        return this._name
    }
    get id()
    {
        return this._id
    }
    get image()
    {
        return  `SamplePhotos/${this._slice}/${this._image}`    
    }
    get idImage()
    {
        return this._idImage
    }

    render()
    {
        const article = document.createElement('article');
        article.innerHTML= `
        <div class="modalPhoto">
            <section class="modalSize">
            <button class="precedent_suivant" id="precedent"> &lt; </button>
            <img id="linkImg"/ src="">
            <button class="precedent_suivant" id="suivant"> &gt; 
            </button>
            <button class=" closePhoto " onclick="closeModalPhoto()">X</button>
            </section>
        </div>
        `
        return article
    }
}