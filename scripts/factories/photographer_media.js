function mediaFactory(photographer, media,ident) {
    var ident = document.getElementById('id');
    if (ident === 82)
    {
        const img = `Sample Photos/Tracy Galindo/${media.image}`;
    }

    if (ident === 925)
    {
        const img = `Sample Photos/Rhode Dubois/${media.image}`;
    }

    if (ident === 243)
    {
        const img = `Sample Photos/Mimi Keel/${media.image}`;
    }
    if (ident === 195)
    {
        const img = `Sample Photos/Marcel Nikolic/${media.image}`;
    }
    if (ident === 930)
    {
        const img = `Sample Photos/Ellie-Rose Wilkens/${media.image}`;
    }
    if (ident === 527)
    {
        const img = `Sample Photos/Nabeel Bradford/${media.image}`;
    }

function getUserCardDOM() {

    const article = document.createElement('article');
    
    const images = document.createElement('img' )
    images.setAttribute("src", media.image);
    
    const h2 = document.createElement( 'h2');
    h2.textContent = media.title;

    article.appendChild(images);
    article.appendChild(h2);
   
    return (article);
    
}
return {getUserCardDOM}
}


