function photographerFactory(data) {
    const { name, portrait,city,country,tagline,price } = data;

    const picture = `assets/photographers/${portrait}`;

    function getUserCardDOM() {
        const article = document.createElement( 'article' );
        const img = document.createElement( 'img' );
        img.setAttribute("src", picture)
        const h2 = document.createElement( 'h2' );
        h2.textContent = name;
        const city_country = document.createElement('h3')
            city_country.textContent = `${city}, ${country} `;
        const tagLine = document.createElement('h4');
        tagLine.textContent = tagline;
        const _price = document.createElement('price');
        _price.textContent = `${price}/jour` ;

        article.appendChild(img);
        article.appendChild(h2);
        article.appendChild(city_country);
        article.appendChild(tagLine);
        article.appendChild(_price)
        return (article);
    }

    return { name, picture, getUserCardDOM }
}