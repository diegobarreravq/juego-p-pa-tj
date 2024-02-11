import {
  opcionOponente,
  comparate,
  restart,
  eleccion,
  maquina,
} from "./index.js";

const piedra = document.getElementById("rock--button");
const papel = document.getElementById("paper--button");
const tijeras = document.getElementById("scissors--button");

const iniciar = document.getElementById("iniciar");
const reiniciar = document.getElementById("reiniciar");

piedra.addEventListener("click", () => {
  if (
    !papel.classList.contains("option--green") &&
    !tijeras.classList.contains("option--green")
  ) {
    piedra.classList.add("option--green");
    eleccion.innerText = piedra.innerText;
  } else {
    restart();
    piedra.classList.add("option--green");
    eleccion.innerText = piedra.innerText;
  }
});

papel.addEventListener("click", () => {
  if (
    !piedra.classList.contains("option--green") &&
    !tijeras.classList.contains("option--green")
  ) {
    papel.classList.add("option--green");
    eleccion.innerText = papel.innerText;
  } else {
    restart();
    papel.classList.add("option--green");
    eleccion.innerText = papel.innerText;
  }
});

tijeras.addEventListener("click", () => {
  if (
    !piedra.classList.contains("option--green") &&
    !papel.classList.contains("option--green")
  ) {
    tijeras.classList.add("option--green");
    eleccion.innerText = tijeras.innerText;
  } else {
    restart();
    tijeras.classList.add("option--green");
    eleccion.innerText = tijeras.innerText;
  }
});

iniciar.addEventListener("click", () => {
  if (!maquina.innerText) {
    maquina.innerText = opcionOponente();
    comparate();
  }
});

reiniciar.addEventListener("click", () => {
  restart(piedra, papel, tijeras);
});
