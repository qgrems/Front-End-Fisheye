const  oModal = document.querySelector(".modalPict");
const openModal = document.querySelectorAll(".photo");

// launch modal event
openModal.forEach((img) => img.addEventListener("click", launchModalPhoto));
function launchModalPhoto() {
    oModal.style.display = "block";
  }
function closeModalPhoto() {
    oModal.style.display = "none";
  }