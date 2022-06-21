class LikesPrice
{
  constructor(likes,price)
  {
    this._likes = likes
    this._price = price

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
          <div class="like_heart">
          <p id = "like" class="price">${this.likes}</p> 
           <em  class = "full_likes fas fa-heart"></em>
          </div>
          <div class="price">${this.price}€ / jour</div>`
        return section
    }
}