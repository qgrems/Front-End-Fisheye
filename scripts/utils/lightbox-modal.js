class ModalMedia {
  constructor(photographe, tabMedia,media) {
    this._title = media.title
    this._photographe = photographe
    this._tabMedia = tabMedia
    this.oModal = document.querySelector(".modalPict");
    this.mediaSection = document.querySelector(".photographer_media");
    this.display = false
  }
  get photographe() {
    return this._photographe
  }
  get tabMedia() {
    return this._tabMedia
  }
  get title(){
    return this._title
  }

  launchModalPhoto(imageId) 
  {
    let indexMedia
    //indexMedia pour prendre la position de la photo pour afficher la bonne dans la lightModal 
    indexMedia = this.tabMedia.findIndex(e => e.id === imageId)
    this.oModal.style.display = "block";
    this.afficheMedia(indexMedia)
    this.display = true
  }

  closeModalPhoto() {
    this.oModal.style.display = "none";
    this.display = false
  }

  keyDown(e, idImage)
  {
    if (e.which === keyCodes.enter) {
      var evt=new Event("click")
      this.launchModalPhoto(idImage)
  }
    
  }
  //fonction suivant et precedent pour changer d'image en fonction de l'index(position de l'image)
  precedent(index) {
    index--
    if (index < 0) {
      index = this.tabMedia.length - 1;
    }
    this.afficheMedia(index)
  }
  suivant (index)
  {
    index++
    if (index > this.tabMedia.length - 1) {
      index = 0;
    }
    this.afficheMedia(index)
  }

  //fonction qui affiche et change l'image dans la lightbox
  afficheMedia(index) {
    // constante pour les touches du clavier
    const keyCodes = {
      escape:27,
      enter:13,
      left:37,
      right:39,
  };

    document.getElementById("linkImg").innerHTML = ""
    document.getElementById("titleImage").innerHTML = this.tabMedia[index].title

    //affiche l'image en fonction de son index
    document.getElementById("linkImg").appendChild(this.tabMedia[index].renderModal())

// prend l'élément precedent et suivant lors d'un click appel les fonction precedent et suivant pour le changement d'image
    document.getElementById('precedent').onclick = () => {
      this.precedent(index)
  }
    document.getElementById('suivant').onclick = () => {
      this.suivant(index)
    }

    //ecoute l'evenement pour changer d'image avec les fleches dans la lightbox
    this.mediaSection.addEventListener('keydown', (event) => {
      if (event.which === keyCodes.left) {
        this.precedent(index)  
      }  
      if (event.which === keyCodes.right) {
        this.suivant(index)
      } 
    })
  }
}