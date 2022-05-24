class Image {
    constructor(data, sliceName, dataphotographer) {
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
    get photographerName() {
        return this._photographerName
    }

    get type() {
        return this._type
    }

    get image() {
        return `SamplePhotos/${this._slice}/${this._image}`
    }

    get id() {
        return this._id
    }

    get photographerId() {
        return this._photographerId
    }

    get title() {
        return this._title
    }

    get likes() {
        return this._likes
    }

    get date() {
        return this._date
    }

    get price() {
        return this._price
    }

    get nameslice() {
        return this._slice
    }

    render() {
        const article = document.createElement('article');
        article.innerHTML = `
        <img id="keyboard" class="openModal" tabindex="4"src= "${this.image}" onclick=app.modalMedia.launchModalPhoto(${this._id})>
        <footer>
            <h2>${this._title}</h2>
            <div class="footer_heart_icon"> 
                <button   id= "buttonLikes" onclick=app.likesMedia.afficheLikes(${this._likes},${this._id})  class="button_heart">
                <p id= "likes" class="like_margin addLike">${this.likes}</p>
                    <i tabindex="5" class="fas fa-heart"></i>
                </button>
            </div>
        </footer>`
        return article
    }
    renderModal() {
        const article = document.createElement('img');
        article.src = `${this.image}`
        return article
    }

    renderoui()
    {
        const article = document.createElement('p');
        article.className = `${this.image}`
        return article
    }
    
}