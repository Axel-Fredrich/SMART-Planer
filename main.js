"use strict";

let liste = document.getElementById("Liste");
let BTN1 = document.getElementById("BTN1");
let form = document.getElementById("form"); 
let input = document.getElementById("input");
let Smart = document.getElementsByClassName("Smart1")
let komp = document.getElementById("komplett")
let nav = document.getElementById("nav");

let Darstellung = document.getElementById("Darstellung");


function Projektname() { 
  let Projektname = document.createElement("h1");
  let link = document.createElement("a");
  link.href = "#nav";
  link.appendChild(Projektname);
  Projektname.innerHTML = input.value;
  Darstellung.appendChild(link);
  input.value = "";
  Projektname.style.textAlign = "center";
  let numProjekte = localStorage.getItem('numProjekte') || 0;
  numProjekte++;
  localStorage.setItem("Projektname_" + numProjekte, Projektname.innerHTML);
  localStorage.setItem("numProjekte", numProjekte);
}

window.addEventListener("load", function() {
  let numProjekte = localStorage.getItem('numProjekte') || 0;
  for (let i = 1; i <= numProjekte; i++) {
    let storedProjektname = localStorage.getItem("Projektname_" + i);
    if (storedProjektname) {
      let Projektname = document.createElement("h1");
      Projektname.innerHTML = storedProjektname;
      Darstellung.appendChild(Projektname);
      Projektname.style.textAlign = "center";
    }
  }
});

input.addEventListener("keydown", function(e) {
  if (e.key === "Enter") { 
    Projektname();
  }
});









