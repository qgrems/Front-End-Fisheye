const  oModal = document.querySelector(".modalPict");
const openModal = document.querySelectorAll(".photo");

// launch modal event
// launch modal event
let tableMedia;

function launchModalPhoto(mediaId,photographerId) {
    console.log(mediaId,photographerId);

    let indexMedia;

    fetch('data/photographers.json')
    .then(response => response.json())
    .then(data => {
      const first_name = data.photographers.find(e => e.id === photographerId).name;
      console.log(first_name)
      const first_name_slice =  first_name.split(' ').slice(0,1);
      tableMedia= data.media.filter( e => e.photographerId === photographerId)
      indexMedia= tableMedia.findIndex(e => e.id === mediaId)
      afficheMedia(indexMedia,first_name_slice);
      oModal.style.display = "block";
    }); 
  }

  function afficheMedia(index,nomPhotographe)
  {
    console.log(index)
    document.getElementById("linkImg").src=`Sample Photos/${nomPhotographe}/${tableMedia[index].image}`;

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
  
