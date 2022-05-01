class LikesPrice
{

    render(likes,price)
    {
        
        const prices = price.price

        const section = document.createElement('section');
        section.innerHTML=`
        <div id="container_like_price">
          <div id = "likes"></div>
          <div id="price"></div>
        </div>`
        return section
    }
}