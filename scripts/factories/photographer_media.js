 function mediaFactory(photographer, media,portrait) {
        // utilisationde split et slice pour recuperer le nom du photographe pour ouvrir le bon dossier d'image
        const first_name = photographer.name;
        const first_name_slice =  first_name.split(' ').slice(0,1);
        //utilisation split et slice pour récuperer les id des images

        
        // affichage du header 
        document.getElementById("name_photographer").innerHTML = `${photographer.name}`;
        document.getElementById("cityCountry").innerHTML=`${photographer.city}, ${photographer.country}`;
        document.getElementById("tagline").innerHTML=`${photographer.tagline} `;
        document.getElementById("photoProfile").src=`Sample Photos/Photographers ID Photos/${photographer.portrait}`;

        //affichage modal Photography

        document.getElementById("linkImg").src=`Sample Photos/${first_name_slice}/${media.image}`;

function getUserCardDOM() {

    //lien vers les imges en fonction des noms et de l'image
    const img = `Sample Photos/${first_name_slice}/${media.image}`;
    
    const article = document.createElement('article');
    
    const images = document.createElement('img' );
    images.className= "photo";
    images.onclick=launchModalPhoto;
    const imageModal = document.getElementsByClassName("openModal");

    images.setAttribute("src", img);
 

    const footer_image = document.createElement('footer');
    const h2 = document.createElement( 'h2');
    h2.textContent = media.title;

    const likeIcone = document.createElement('div');
    likeIcone.className="footer_heart_icon";
    
    const like = document.createElement('p');
    like.className= "like_margin"
    const icone = document.createElement('i')
    icone.className= "fas fa-heart"; 
    like.textContent = media.likes;

    const div = document.createElement('div')
    const imageProfile = document.createElement('img');
    imageProfile.setAttribute("src",photographer.portrait)
    div.appendChild(imageProfile);

    
    article.appendChild(images);
    footer_image.appendChild(h2);

    footer_image.appendChild(likeIcone);
    likeIcone.appendChild(like);
    likeIcone.appendChild(icone);
    article.appendChild(footer_image);
   
    return (article);
    
}
return {getUserCardDOM}
}


