function contar() {
    let inicio = document.getElementById('inicio') 
    let fim = document.getElementById('fim') 
    let passo = document.getElementById('passo') 

    let resultado = document.getElementById('resultado') 
    
    resultado.style.textAlign = 'center'
    resultado.style.padding = '10px'

    if (inicio.value.length == 0 || fim.value.length == 0 || fim.value.length == 0) {
        resultado.innerHTML = `IMPOSSÍVEL CONTAR \u{1F3C1}`
        window.alert('[ERRO] Existem Não Preenchidos!')
    } else {

        resultado.innerHTML = `Contando: <br>`

        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value) 

        //verificando passo = 0
        if (p <= 0) {
            window.alert(`${p} é um passo inválido! Considerando PASSO = 1`)
            p = 1
        }
        
        if (i < f) {
            //contagem crescente
            for (let c = i; c <= f; c += p) {
                resultado.innerHTML += `${c} \u{1F449}`
            }
        } else  {
            //contagem decrescente
            for (let c = i; c >= f; c -= p) {
                resultado.innerHTML += `${c} \u{1F449}`
            }    
        }       

        resultado.innerHTML += `FIM! \u{1F3C1}`
    }    
}