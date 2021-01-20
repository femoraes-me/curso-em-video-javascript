let inputNum = document.getElementById('inputNum')
let numList = document.getElementById('numList')
let resultado = document.getElementById('resultado')
let valores = []

//verifica se é um numero válido
function isNumber(n) {
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

//verifica se o numero está na lista
function inList(num, list) {
    if (list.indexOf(Number(num)) != -1) {
        return true
    } else {
        return false
    }
}

//função para adicionar numero na lista
function adicionar() { 
    //verificando criterios do numero 
    if(isNumber(inputNum.value) && !inList(inputNum.value, valores)) {
        valores.push(Number(inputNum.value))
        let item = document.createElement('option')
        item.text = `Número ${inputNum.value} adicionado.`
        numList.appendChild(item)
    } else {
        alert(`${inputNum.value} Valor inválido ou já adicionado na lista.`)
    }

    inputNum.value = ''
    inputNum.focus()
}

function analisar() {
    if(valores.length == 0) {
        alert('Lista Vazia! Adicione valores na lista.')
    } else {
        let totalElementos = valores.length
        
        resultado.innerHTML = ''
        resultado.innerHTML += `O total de elementos é ${totalElementos}`
        
    }
}