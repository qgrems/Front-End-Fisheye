const  oModal = document.querySelector(".modalPict");
const openModal = document.querySelectorAll(".photo");

// launch modal event
let tableMedia;

function launchModalPhoto(photographerId,imageId,namePhotographer) 
  {
    console.log(photographerId,imageId,namePhotographer)
    oModal.style.display = "block";
  }
 function afficheMedia(photographerId,index)
  {
    console.log(index)
    document.getElementById("linkImg").src=`Sample Photos/Mimi/${photographerId[index].image}`;

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
  
