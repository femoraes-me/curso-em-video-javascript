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
        numList.appendChild(item) //adicionando na lista visual
        resultado.innerHTML = '' //limpando informações do display
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
        
        let totalElementos = valores.length //pegando o total de elementos

        //pegando o maior e menor elementos
        let maior = valores[0]
        let menor = valores[0]

        for(let i in valores) {
            //verifica maior
            if(valores[i] > maior) {
                maior = valores[i]
            }
            //verifica menor
            if(valores[i] < menor) {
                menor = valores[i]
            }
        }

        //pegando a soma e média
        let soma = 0
        for(let i in valores) {
            soma+=valores[i]
        }

        //calculando a média
        let media = soma / totalElementos
        
        resultado.innerHTML = ''
        resultado.innerHTML += `<p>O total de elementos é ${totalElementos}</p>`
        resultado.innerHTML += `<p>O maior valor informado é ${maior}</p>`
        resultado.innerHTML += `<p>O menor valor informado é ${menor}</p>`
        resultado.innerHTML += `<p>A soma dos valores é ${soma}</p>`
        resultado.innerHTML += `<p>A médio dos valores é ${media}</p>`

    }
}