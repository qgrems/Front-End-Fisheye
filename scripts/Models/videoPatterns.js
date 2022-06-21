class Video {
  constructor(data, sliceName, dataphotographer, tableauMedia) {
    this._type = 'video'
    this._id = data.id
    this._photographerId = data.photographerId
    this._title = data.title
    this._likes = data.likes
    this._date = data.date
    this._price = data.price
    this._video = data.video
    this._slice = sliceName
    this._tableauMedia = tableauMedia
  }
  get type() {
    return this._type
  }
  get id() {
    return this._id
  }

  get _photographerID() {
    return this._photographerID
  }

  get title() {
    return this._title
  }

  get video() {
    return `SamplePhotos/${this._slice}/${this._video}`
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

  render() {
    const article = document.createElement('article')
    article.innerHTML = `
        <video aria-label="${this.title}"  tabindex="${this._tableauMedia}" src= "${this.video}" onclick=app.modalMedia.launchModalPhoto(${this._id})></video>
        <div>
            <h2>${this._title}</h2>
            <div class="footer_heart_icon"> 
                <button tabindex="-1" class= "buttonLikes" onclick=app.likesMedia.afficheLikes(${this._likes},${this._id})  class="button_heart">
                    <p class= "likes"  class="like_margin">${this._likes}</p>
                    <em   aria-label= "likes" tabindex="${this._tableauMedia}" class="fas fa-heart "></em>
                </button>
            </div>
        </div>
        `
    return article
  }
  renderModal() {
    const article = document.createElement('video')
    article.src = `${this.video}`
    article.controls = true
    return article
  }
}
