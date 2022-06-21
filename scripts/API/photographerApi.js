class PhotographerApi {
    constructor(url) {
        this.url = url
    }
    getPhotographers() {
        return fetch(this.url).then((Res) => Res.json())
    }
}
