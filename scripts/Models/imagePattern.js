

class Image
{
    constructor	(data,sliceName,photographerPrice)
    {
        this._photographerPrice = photographerPrice
        this._type = 'photo'
        this._id = data.id
        this._photographerId = data.photographerId
        this._title = data.title
        this._image = data.image
        this._likes = data.likes
        this._date = data.date
        this._price = data.price
        this._slice = sliceName


    }
    
    get name()
    {
        return this._name
    }

    get type()
    {
        return this._type
    }
    get image()
    {
        return  `SamplePhotos/${this._slice}/${this._image}`    }
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
  

        
       
       
    render(mediadata,photographerName) 
    {
        const article = document.createElement('article');
        article.innerHTML= `
        <img class="openModal" src= "${this.image}" onclick=launchModalPhoto(${this._photographerId})>
        <footer>
            <h2>${this._title}</h2>
            <div class="footer_heart_icon"> 
            <p class="like_margin">${this._likes}</p>
            <i class="fas fa-heart"></i>
            </div>
        </footer>`
        return article
    }
}
