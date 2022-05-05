class Video
{
    constructor	(data,sliceName)
    {
        this._type = 'video'
        this._id = data.id
        this._photographerId = data.photographerId
        this._title = data.title
        this._likes = data.likes
        this._date = data.date
        this._price = data.price
        this._video = data.video
        this._slice = sliceName   
    }
    get type()
    {
        return this._type
    }
    get id()
    {
        return this._id
    }

    get _photographerID()
    {
        return this._photographerID
    }

    get title()
    {
        return this._title
    }

    get video(){
        return  `SamplePhotos/${this._slice}/${this._video}`
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

    render(data) 
    {
        const article = document.createElement('article');
        article.innerHTML= `

        <video  class= "" src= "${this.video}"></video>
        <footer>
            <h2>${this._title}</h2>
            <div class="footer_heart_icon"> 
            <p class="like_margin">${this._likes}</p>
            <button onclick=launchIncrementLikes class="button_heart"><i class="fas fa-heart "></i></button>
            </div>
        </footer>`
        return article
    }
}