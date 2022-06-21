class App {
  constructor() {
    this.photographersSection = document.querySelector('.photographer_section')
    this.photographerApi = new PhotographerApi('./data/photographers.json')
  }

  async main() {
    const photographersdata = await this.photographerApi.getPhotographers()
    photographersdata.photographers.forEach((photographer) => {
      const photographerModel = new Photographers(photographer)
      const userCardDOM = photographerModel.render()
      this.photographersSection.appendChild(userCardDOM)
    })
  }
}
const app = new App()
app.main()
