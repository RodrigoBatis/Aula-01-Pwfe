const titulo = document.getElementById ('titulo')   

const nome = document.getElementById ('nome') 

const ok = document.getElementById ('ok') 

function trocarTitulo () {
    titulo.textContent = nome.value
    titulo.classList.add('vermelho')
}

ok01.addEventListener('click' , trocarTitulo ) 


function alterarTitulo () {
    titulo.textContent = nome.value
    titulo.classList.add('azul')
}


ok02.addEventListener('click' , alterarTitulo )


function modificarTitulo () {
    titulo.textContent = nome.value
    titulo.classList.add('verde')
}


ok03.addEventListener('click' , modificarTitulo )

console.log (nome)