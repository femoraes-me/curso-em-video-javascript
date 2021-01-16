function gerarTabuada() {
    let numero = document.getElementById('numero')
    //let resultado = document.getElementById('resultado')
    let tabuada = document.getElementById('tabuada')

    if(numero.value.length != 0) {
        let n = Number(numero.value) //Conversão de txt para numero

        tabuada.innerHTML = ''

        for (let i = 1; i <= 10; i++) {
            let item = document.createElement('option')
            item.text = `${n} x ${i} = ${n*i}`
            item.value = `item${i}`
            tabuada.appendChild(item)
        }
    } else {
        window.alert('Por favor, digite um número')
    }
}