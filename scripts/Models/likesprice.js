class LikesPrice
{
  constructor(likes,price)
  {
    this._likes = likes
    this._price = price
    console.log(this._likes)
  }

  get likes(){
    return this._likes
  }

  get price(){
    return this._price
  }

    render()
    {
        const section = document.createElement('div');
        section.innerHTML=`
          <div id = "price">${this.likes} <i class = "full_likes fas fa-heart"></i> </div>
          <div id="price">${this.price}€ / jour</div>`
        return section
    }
}