class Medias
{

    constructor	(data)
    {
        this._id = data.id
        this._photographerId = data.photographerId
        this._title = data.title
        this._image = data.image
        this._likes = data.likes
        this._date = data.date
        this._price = data.price
        this._portrait = data.portrait
    }

    get id()
    {
        return this._id
    }

    get portrait()
    {
        return `SamplePhotos/PhotographersIDPhotos/${this._portrait}`
    }

    get photographerId()
    {
        return this._photographerId
    }

    get title()
    {
        return this._title
    }

    get image(){
        return  `Sample Photos/${first_name_slice}/${this._image}`
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

        const article = document.createElement('section');
        document.getElementById("name_photographer").innerHTML = `${data.name}`;
        document.getElementById("cityCountry").innerHTML=`${data.city}, ${data.country}`;
        document.getElementById("tagline").innerHTML=`${data.tagline} `;
        document.getElementById("photoProfile").src=`SamplePhotos/PhotographersIDPhotos/${data.portrait}`;
        return article
    }
}