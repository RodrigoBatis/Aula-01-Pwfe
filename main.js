const titulo = document.getElementById("titulo")
const nome = document.getElementById("nome")
const vermelho = document.getElementById("vermelho")
const azul = document.getElementById("vermelho")
const vermelho = document.getElementById("vermelho")

function trocarTitulo(){
    titulo.textContent = nome.value;
    titulo.classList.add("vermelho")
}

ok.addEventListener("click", trocarTitulo )