const  oModal = document.querySelector(".modalPict");
const openModal = document.querySelectorAll(".photo");

// launch modal event
let tableMedia;

function launchModalPhoto(photographerId,imageId,namePhotographer) 
  {
    console.log(photographerId,imageId,namePhotographer)
    oModal.style.display = "block";
    let indexMedia
    indexMedia= mediaData.media.findIndex(e => e.id === medias[0].id)
    console.log(indexMedia)

  }
function afficheMedia(photographerId,index,namePhotographer)
  {
    console.log(index)
    document.getElementById("linkImg").src=`Sample Photos/${namePhotographer}/${photographerId[index].image}`;

    document.getElementById('precedent').onclick = () =>{
      index--
      if (index < 0)
      {
        index = tableMedia.length -1;
      }
      afficheMedia(index,nomPhotographe)
    }

    document.getElementById('suivant').onclick = () =>
    {
      index++
      if (index > tableMedia.length-1)
      {
        index = 0;
      }
      afficheMedia(index,nomPhotographe)
    }


  }
function closeModalPhoto() {
    oModal.style.display = "none";
  }
  
