class ModalPhoto
{
    constructor(sliceName,photographerData, dataImage,indexMedia,tableMedia)
    {
       this._index = indexMedia
       this._table = tableMedia
        this._name = photographerData.name
        this._id = photographerData.id
        this._image = dataImage.image
        this._slice = sliceName
        this._idImage = dataImage.id
        this._data = photographerData
        
    }

    get index()
    {
        return this._index
    }
    get table()
    {
        return this._table
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
        return  `SamplePhotos/${this._slice}/${this._table[this._index]}.${this._image}`    
    }
    get idImage()
    {
        return this._idImage
    }
    get slice(){
        this._slice = sliceName
    }
    
    render()
    {
        console.log(this._image)
        const article = document.createElement('article');
        article.innerHTML= `
        <div class="modalPhoto">
            <section class="modalSize">
            <button class="precedent_suivant" id="precedent"> &lt; </button>
            <img id="linkImg"/ src="${this.image}">
            <button class="precedent_suivant" id="suivant"> &gt; 
            </button>
            <button class=" closePhoto " onclick="closeModalPhoto()">X</button>
            </section>
        </div>
        `
        return article
    }
}