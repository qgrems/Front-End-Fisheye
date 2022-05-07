let i = 0
class IncrementationLikes
{
    constructor(photographe,medias,nbrLikes)
    {
        this._photographe = photographe
        this._tabMedia = medias
        this._nbrLikes = nbrLikes
        console.log(this.tabMedia)
    }
    get nbrLikes()
    {
        this._nbrLikes
    }
    get photographe()
    {
        return this._photographe
    }
    get tabMedia()
    {
        return this._tabMedia
    }
    
    afficheLikes(likes)
    {
        let likesMedia
        likesMedia = this.tabMedia.findIndex(e => e.likes === likes)
        this.incrementation(likes,likesMedia)
    }

    incrementation(likes,likesMedia)
    {
      

        const valeurDeBase = document.querySelectorAll('#likes')
                if (i<1) {
                    i++
                    likes +=1
                    valeurDeBase[likesMedia].innerText = likes
                    console.log(likesMedia)   
                }
                else
                {
                    i--
                    valeurDeBase[likesMedia].innerText = likes 
                }

        
    }
}