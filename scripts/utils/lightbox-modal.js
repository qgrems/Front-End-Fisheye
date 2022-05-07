class ModalMedia {
  constructor(photographe, tabMedia) {
    this._photographe = photographe
    this._tabMedia = tabMedia
    this.oModal = document.querySelector(".modalPict");
  }
  get photographe() {
    return this._photographe
  }
  get tabMedia() {
    return this._tabMedia
  }
  launchModalPhoto(imageId) 
  {
    //console.log(photographerId,imageId,namePhotographer)
    this.oModal.style.display = "block";
    let indexMedia
    indexMedia = this.tabMedia.findIndex(e => e.id === imageId)
    console.log(indexMedia)
    this.afficheMedia(indexMedia)

  }

  closeModalPhoto() {
    this.oModal.style.display = "none";
  }

  afficheMedia(index) {

    document.getElementById("linkImg").innerHTML = ""
    document.getElementById("linkImg").appendChild(this.tabMedia[index].renderModal())
    document.getElementById('precedent').onclick = () => {
      index--
      if (index < 0) {
        index = this.tabMedia.length - 1;
        
      }
      this.afficheMedia(index)
    }

    document.getElementById('suivant').onclick = () => {
      index++
      if (index > this.tabMedia.length - 1) {
        index = 0;
      }
      this.afficheMedia(index)
    }


  }
}