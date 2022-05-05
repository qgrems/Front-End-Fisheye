

class Image
{
    constructor	(data,sliceName,dataphotographer)
    {
        this._type = 'photo'
        this._id = data.id
        this._photographerId = data.photographerId
        this._title = data.title
        this._image = data.image
        this._likes = data.likes
        this._date = data.date
        this._price = data.price
        this._slice = sliceName
        this._photographerName = dataphotographer.name   
    }
    get photographerName()
    {
        return this._photographerName
    }

    get type()
    {
        return this._type
    }

    get image()
    {
        return  `SamplePhotos/${this._slice}/${this._image}`    
    }

    get id()
    {
        return this._id
    }

    get photographerId()
    {
        return this._photographerId
    }

    get title()
    {
        return this._title
    }

    get likes(){
        return this._likes
    }

    get date(){
        return this._date
    }

    get price ()
    {
        return this._price
    }
    get nameslice()
    {
        return this._slice
    }

    render() 
    {
        console.log(this._slice)
        const article = document.createElement('article');
        article.innerHTML= `
        <img class="openModal" src= "${this.image}" onclick=launchModalPhoto(${this._photographerId},${this._id},${this._slice})>
        <footer>
            <h2>${this._title}</h2>
            <div class="footer_heart_icon"> 
            <button onclick=launchIncrementLikes(${this._likes})  class="button_heart">
                <p class="like_margin">${this._likes}</p>
                <i class="fas fa-heart"></i>
            </button>
            </div>
        </footer>`
        return article
    }
}
