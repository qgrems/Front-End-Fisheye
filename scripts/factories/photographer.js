function photographerFactory(data) {
    const { name, portrait,city,country,tagline,price,id,oneclick } = data;

    const picture = `Sample Photos/Photographers ID Photos/${portrait}`;
    function getUserCardDOM() {

        const article = document.createElement('article');

        const img = document.createElement('img' )
        img.setAttribute("src", picture);
        img.id = `${id}`



        const h2 = document.createElement( 'h2');
        h2.textContent = name;
        h2.id = `${id}`
        const a = document.createElement('a');
        a.setAttribute("href", `http://127.0.0.1:5500/Front-End-Fisheye/photographer.html?${id}`);

        const b = document.createElement('a')
        b.setAttribute("href", `http://127.0.0.1:5500/Front-End-Fisheye/photographer.html?${id}`);
        
        const city_country = document.createElement('h3')
        city_country.textContent = `${city}, ${country} `;

        const tagLine = document.createElement('h4');
        tagLine.textContent = tagline;

        const _price = document.createElement('price');
        _price.textContent = `${price}/jour` ;

        a.appendChild(img);
        article.appendChild(a);

        b.appendChild(h2);
        article.appendChild(b);

        article.appendChild(city_country);
        article.appendChild(tagLine);
        article.appendChild(_price);
       
        return (article);
        
    }
    return {getUserCardDOM }
}