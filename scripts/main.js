let myImage = document.querySelector("img");

myImage.addEventListener("click", function () {
  let mySrc = myImage.getAttribute("src");
  if (mySrc === "images/moulins.jpg") {
    myImage.setAttribute("src", "images/moulins2.jpg");
  } else {
    myImage.setAttribute("src", "images/moulins.jpg");
  }
});

let monbouton = document.querySelector("button")
let myHeading = document.querySelector("h1")

function setUserName() {
  let monnom = prompt("Veuillez saisir votre nom");
  localStorage.setItem("nom", monnom);
  myHeading.textContent = "Bienvenue au domaine des moulins, " + monnom

}

if(!localStorage.getItem("nom")) {
  setUserName();
} else {
  let storedName = localStorage.getItem("nom");
  myHeading.textContent = "Bienvenue au domaine des moulins, " + storedName;
}

monbouton.addEventListener("click", function () {
  setUserName();
});