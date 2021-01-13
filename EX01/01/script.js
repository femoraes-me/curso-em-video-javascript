function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('img')

    var data = new Date()
    var hora = data.getHours()
    var minuto = data.getMinutes()
    msg.innerHTML = `Agora são ${hora}h`
    if (minuto < 10) {
        msg.innerHTML += `0${minuto}`
    } else {
        msg.innerHTML += `${minuto}`
    }

    if (hora >= 5 && hora < 12) {
        img.src = 'img/manha.png'
        document.body.style.background = '#e2cd9f'
    } else if (hora >= 12 && hora < 18) {
        img.src = 'img/tarde.png'
        document.body.style.background = '#b9846f'
    } else {
        img.src = 'img/noite.png'
        document.body.style.background = '#515154'
    }
}

