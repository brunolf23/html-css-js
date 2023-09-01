function alterando(){
    var msg1 = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg1.innerHTML = `Agora são ${hora} horas.`

    if (hora >= 6 && hora < 12){
        img.src = 'image/manha.png'
        document.body.style.background = '#e2cd9f'

    } else if (hora > 12 && hora < 18){
        img.src = 'image/tarde.png'
        document.body.style.background = '#b9846f'
 
    } else {
        img.src = 'image/noite.png'
        document.body.style.background = '#515154'
    }
}