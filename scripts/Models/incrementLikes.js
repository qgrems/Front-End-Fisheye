class IncrementationLikes {
  constructor(photographe, medias, nbrLikes) {
    this._photographe = photographe
    this._tabMedia = medias
    this._nbrLikes = nbrLikes
    this._id = medias.id
  }
  get id() {
    return this._id
  }
  get nbrLikes() {
    this._nbrLikes
  }
  get photographe() {
    return this._photographe
  }
  get tabMedia() {
    return this._tabMedia
  }

  afficheLikes(likes, idMedia) {
    let likesMedia
    likesMedia = this.tabMedia.findIndex((e) => e.id === idMedia)
    this.incrementation(likes, likesMedia)
  }

  incrementation(likes, likesMedia) {
    const valeurDeBase = document.querySelectorAll('.likes')
    const buttonLike = document.querySelectorAll('.buttonLikes')
    const liked = buttonLike[likesMedia].classList.toggle('liked')
    if (liked) {
      likes += 1
      valeurDeBase[likesMedia].innerText = likes
      this.incrementTotalLikes(this._nbrLikes)
    } else {
      valeurDeBase[likesMedia].innerText = likes
      this.decrementTotalLikes(this._nbrLikes)
    }
  }
  incrementTotalLikes() {
    const allLikes = document.querySelectorAll('#like')
    const addlikes = Array.from(allLikes, (e) => Number(e.innerText))
    const sumValue = addlikes.reduce(
      (accumulator, currentValue) => accumulator + currentValue
    )
    like.innerText = sumValue + 1
  }
  decrementTotalLikes() {
    const allLikes = document.querySelectorAll('#like')
    const addlikes = Array.from(allLikes, (e) => Number(e.innerText))
    const sumValue = addlikes.reduce(
      (accumulator, currentValue) => accumulator + currentValue
    )
    like.innerText = sumValue - 1
  }
}
