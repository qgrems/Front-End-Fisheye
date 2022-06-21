class Image {
    constructor(data, sliceName, dataphotographer,tableauMedia) {
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
        this._tableauMedia = tableauMedia
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
        <img alt="${this.title}" id="image_${this._id}"  tabindex="${this._tableauMedia}  class="openModal"  src="${this.image}" onkeydown=app.modalMedia.keyDown(event,${this._id}) onclick=app.modalMedia.launchModalPhoto(${this._id})>
        <div>
            <h2>${this._title}</h2>
            <div class="footer_heart_icon"> 
                <button  tabindex="-1" id= "buttonLikes" onclick=app.likesMedia.afficheLikes(${this._likes},${this._id})  class="button_heart">
                <p id= "likes" class="like_margin addLike">${this.likes}</p>
                    <em id="heart" aria-label="likes" tabindex="${this._tableauMedia}"aria-label="likes" class="fas fa-heart"></em>
                </button>
            </div>
        </div>`
        return article
        
    }
    renderModal() {
        const article = document.createElement('img');
        article.src = `${this.image}`
        return article
    }
  //ouverture du modal photo avec la touche entrée


}