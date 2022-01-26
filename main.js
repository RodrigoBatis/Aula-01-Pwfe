/* Constantes */
const titulo    = document.getElementById("titulo");
const nome      = document.getElementById("nome");
const bVermelho = document.getElementById("vermelho");
const bAzul     = document.getElementById("azul");
const bVerde    = document.getElementById("verde");

/* Listeners */
bVermelho.addEventListener("click", toggleRed);
bAzul.addEventListener("click", toggleBlue);
bVerde.addEventListener("click", toggleGreen);

/* Functions */
function toggleRed() {
  titulo.innerHTML = nome.value;
  titulo.classList.toggle("vermelho");
}

function toggleBlue() {
  titulo.innerHTML = nome.value;
  titulo.classList.toggle("azul");
}

function toggleGreen() {
  titulo.innerHTML = nome.value;
  titulo.classList.toggle("verde");
}