const nombre = document.querySelector('#nombre')
const cantidad = document.querySelector('#cantidad')
const lugar = document.querySelector('#lugar')
const tipo = document.querySelector('#tipo')
const btnAgregar = document.querySelector('#btnAgregar')

btnAgregar.addEventListener('click', function(){
    window.location.href = `agregar/${nombre.value}/${cantidad.value}/${lugar.value}/${tipo.value}`
})