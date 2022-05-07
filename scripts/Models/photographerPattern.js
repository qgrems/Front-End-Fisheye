class Photographers {
    constructor(data) {
        this._name = data.name
        this._id = data.id
        this._city = data.city
        this._country = data.country
        this._tagline = data.tagline
        this._price = data.price
        this._portrait = data.portrait
        this._likes = data.likes
    }
    get name() {
        return this._name
    }

    get id() {
        return this._id
    }

    get city() {
        return this._city
    }

    get country() {
        return this._country
    }

    get tagline() {
        return this._tagline
    }

    get price() {
        return this._price
    }

    get portrait() {
        return `SamplePhotos/PhotographersIDPhotos/${this._portrait}`
    }

    render() {
        const article = document.createElement('article');
        article.innerHTML = `
        <a href="./photographer.html?${this.id}">
        <img src= ${this.portrait}>
        </a>
        <a href = "./photographer.html?${this.id}" >
        <h2 id = ${this.id}>
            ${this.name}
        </h2>
        </a>
        <h3>
            ${this.city}, ${this.country}
        </h3>
        <h4> 
            ${this.tagline}
        </h4>
        <p>
        ${this.price}/jour
        </p>`

        return article
    }
    renderBandeau() {

        const article = document.createElement('div');
        article.innerHTML = `
        <div class="photograph-header_history">
          <h1 id ="name_photographer" >${this.name}</h1>
          <p id = "cityCountry">${this.city}, ${this.country}</p>
          <p id = "tagline">${this.tagline} </p>
        </div>
            <button class="contact_button" onclick="launchModal()">Contactez-moi</button>
            <img id = "photoProfile" src="${this.portrait}"></img>
        `
        return article
    }


}