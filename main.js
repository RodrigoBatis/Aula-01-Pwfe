const titulo = document.getElementById("titulo")
const nome = document.getElementById("nome")
const vermelho = document.getElementById("vermelho")
const azul = document.getElementById("azul")
const verde = document.getElementById("verde")

function trocarTituloVermelho(){
    titulo.textContent = nome.value;
    titulo.classList.add("vermelho")
}

vermelho.addEventListener("click", trocarTitulo )

function trocarTituloAzul(){
    titulo.textContent = nome.value;
    titulo.classList.add("azul")
}

azul.addEventListener("click", trocarTitulo )

function trocarTituloVerde(){
    titulo.textContent = nome.value;
    titulo.classList.add("verde")
}

verde.addEventListener("click", trocarTitulo )