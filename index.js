const resultado = document.getElementById("mensaje");
export let eleccion = document.getElementById("elec-pyr");
export let maquina = document.getElementById("elec-mch");

function numeroAleatorio() {
  return Math.floor(Math.random() * 3);
}
export function opcionOponente() {
  let objeto = "";
  switch (numeroAleatorio()) {
    case 0:
      objeto = "piedra";
      break;
    case 1:
      objeto = "papel";
      break;
    case 2:
      objeto = "tijeras";
      break;
  }
  return objeto;
}
function insertRedColor(e) {
  e.classList.add("red");
}
function insertGreenColor(e) {
  e.classList.add("green");
}

export function comparate() {
  if (eleccion.innerText === maquina.innerText) {
    resultado.innerText = "😐 Empate";
  } else if (
    eleccion.innerText === "piedra" &&
    maquina.innerText === "tijeras"
  ) {
    resultado.innerText = "🤩‼ GANASTE ‼";
    insertGreenColor(eleccion);
    insertGreenColor(resultado);
    insertRedColor(maquina);
  } else if (
    eleccion.innerText === "tijeras" &&
    maquina.innerText === "papel"
  ) {
    resultado.innerText = "🤩‼ GANASTE ‼";
    insertGreenColor(eleccion);
    insertGreenColor(resultado);
    insertRedColor(maquina);
  } else if (eleccion.innerText === "papel" && maquina.innerText === "piedra") {
    resultado.innerText = "🤩‼ GANASTE ‼";
    insertGreenColor(eleccion);
    insertGreenColor(resultado);
    insertRedColor(maquina);
  } else {
    resultado.innerText = "😔 perdiste";
    insertRedColor(eleccion);
    insertGreenColor(maquina);
  }
}
export function restart(p, pl, t) {
  eleccion.textContent = "";
  maquina.textContent = "";
  resultado.textContent = "";
  p.classList.remove("option--green");
  pl.classList.remove("option--green");
  t.classList.remove("option--green");
  eleccion.classList.remove("red");
  maquina.classList.remove("red");
  resultado.classList.remove("red");
  eleccion.classList.remove("green");
  maquina.classList.remove("green");
  resultado.classList.remove("green");
}
