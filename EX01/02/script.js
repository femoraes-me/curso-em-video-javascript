function verificar() {
    var data = new Date() //cria objeto com data atual
    var ano = data.getUTCFullYear() //retorna ano com 4 dígitos

    var formAno = document.getElementById('txtAno') //armazenando data do formulario
    var resultado = document.getElementById('resultado') //armazenando div de resultados

    //verificar data válida
    if (formAno.value.length == 0 || formAno.value > ano) {
        alert('Verifique os dados e tente novamente!')    
    } else  {
        var idade = ano - Number(formAno.value) //calculo de idade

        //criando elemento de imagem
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        //verificar genero
        var formSex = document.getElementsByName('radioSex')
        var genero = ''
        if (formSex[0].checked) {
            genero = 'Homem'
            if(idade >= 0 && idade < 4) {
                //bebe
                img.setAttribute('src', 'img/bebe-menino.jpg')
            } else if (idade < 12) {
                //criança
                img.setAttribute('src', 'img/crianca-menino.jpg')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'img/jovem-menino.jpg')
            } else if (idade < 60) {
                //adulto
                img.setAttribute('src', 'img/adulto.jpg')
            } else {
                //idoso
                img.setAttribute('src', 'img/idoso.jpg')
            }
        } else {
            genero = 'Mulher'
            if(idade >= 0 && idade < 4) {
                //bebe
                img.setAttribute('src', 'img/bebe-menina.jpg')
            } else if (idade < 12) {
                //criança
                img.setAttribute('src', 'img/crianca-menina.jpg')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'img/jovem-menina.jpg')
            } else if (idade < 60) {
                //adulto
                img.setAttribute('src', 'img/adulta.jpg')
            } else {
                //idoso
                img.setAttribute('src', 'img/idosa.jpg')
            }
        }

        //
        
        resultado.style.textAlign = 'center' //centralizando texto
        resultado.innerHTML = `${genero} com ${idade} anos <br><br>`

        img.style.borderRadius = '50%'
        //inserir imagem
        resultado.appendChild(img)

    }
}