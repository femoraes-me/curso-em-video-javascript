function contar() {
    let inicio = document.getElementById('inicio') 
    let fim = document.getElementById('fim') 
    let passo = document.getElementById('passo') 

    let resultado = document.getElementById('resultado')


    if (inicio.value.lenght == 0) {
        window.alert('Campo Vazio')
    } else {
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value) 

        resultado.style.textAlign = 'center'
        resultado.style.padding = '10px'

        resultado.innerHTML = `Contando <br>`
        
        while (i <= f) {
            resultado.innerHTML += `${i}, `
            i++   
        }
    }    
}