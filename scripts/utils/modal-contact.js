


// DOM Elements
const modalbg = document.querySelector("#contact_modal");
const modalBtn = document.querySelectorAll(".contact_button");
const contact = document.getElementById('contact_modal')
const main = document.getElementById('main')
const Name = document.getElementById('namePhotographer')
// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

const keyCodes = {
  escape:27,
  enter:13,
};
function photographersName(photographerName)
{
  document.getElementById('namePhotographer').innerHTML = photographerName
}

// launch modal form
function launchModal(photographerName) {
  modalbg.style.display = "block";
  photographersName(photographerName)
  const tab = document.getElementById('tab').focus()
  main.ariaHidden = true
  modalbg.addEventListener('keydown', (event) => {
    if (event.which === keyCodes.escape) {
      closeModal();
    }      
  });
  
}

//close modal
function closeModal(){
  modalbg.style.display = "none";
}

var erreur_firstName;
var firstName = document.getElementById("firstName");

var erreur_lastName;
var lastName = document.getElementById("lastName");

var erreur_email;
var pattern_email = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
var email = document.getElementById("mail");

var erreur_message;
var message = document.getElementById("message");

var firstNameBool = false;
var lastNameBool = false;
var emailBool = false;
var messageBool = false;




document.getElementById("sendMessage").addEventListener("submit",function(e){

  function firstNameValid()
{
 
  if (firstName.value === "" || firstName.value.length < 3 || !isNaN(firstName.value))
  {
    document.getElementById('erreur_firstName').innerHTML = "Veuillez entrer 3 caractères ou plus pour le champ du prénom."
    document.getElementsByClassName("text-control")[0];
  }
  else 
  {
    firstNameBool = true;
    document.getElementById('erreur_firstName').innerHTML = ""
    document.getElementsByClassName("text-control")[0];
  }
}

function lastNameValid()
{
  if (lastName.value === "" || lastName.value.length < 5 || !isNaN(lastName.value))
  {
    document.getElementById('erreur_lastName').innerHTML = "Veuillez entrer 5 caractères ou plus pour le champ du nom."
    document.getElementsByClassName("text-control")[1];
  }
  else 
  {
    lastNameBool = true;
    document.getElementById('erreur_lastName').innerHTML = ""
    document.getElementsByClassName("text-control")[1];
  }
} 

function emailValid ()
{
  if (email.value === "")
  {
    document.getElementById('erreur_email').innerHTML = "Adresse electronique non valide"
    document.getElementsByClassName("text-control")[2];
  }
  else 
  {
    emailBool = true;
    document.getElementById('erreur_email').innerHTML = ""
    document.getElementsByClassName("text-control")[2];
  }
  if ( email.value.match(pattern_email))
  {
    emailBool = true;
    document.getElementById('erreur_email').innerHTML = ""
    document.getElementsByClassName("text-control")[2];
  }
  else 
  {
    document.getElementById('erreur_email').innerHTML = "Adresse electronique non valide"
    document.getElementsByClassName("text-control")[2];
  }
}
function messageValid()
{
  if (message.value === "" || message.value.length < 9)
  {
    document.getElementById('erreur_message').innerHTML = "Veuillez entrer 9 caractères ou plus pour le champ du message."
    document.getElementsByClassName("text-control")[1];
  }
  else 
  {
    messageBool = true;
    document.getElementById('erreur_message').innerHTML = ""
    document.getElementsByClassName("text-control")[1];
  }
} 

    e.preventDefault();
    firstNameValid();
    lastNameValid();
    emailValid();
    messageValid();
    if(firstNameBool === true && lastNameBool === true  && emailBool === true && messageBool === true) 
    {
        console.log(firstName.value)
        console.log(lastName.value)
        console.log(email.value)
        console.log(message.value)
    }
    else {
      e.preventDefault('');
    }

});