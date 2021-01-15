function contar() {
    var inicio = document.getElementById('inicio') 
    var fim = document.getElementById('fim') 
    var passo = document.getElementById('passo') 

    var resultado = document.getElementById('resultado')

    var i = Number(inicio.value)
    var f = Number(fim.value)
    var p = Number(passo.value) 

    resultado.style.textAlign = 'center'
    resultado.style.padding = '10px'

    resultado.innerHTML = `Contando <br>`
    
    while (i <= f) {
        resultado.innerHTML += `${i}, `
        i++   
    }
}