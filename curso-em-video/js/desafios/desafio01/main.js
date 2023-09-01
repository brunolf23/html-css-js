function alterando(){
    var msg1 = document.getElementById('msg')
    var imagem = document.getElementById('foto')
    var data = new Date()
    var hora = data.getHours()
    msg1.innerHTML = `Agora são ${hora} horas.`

    if (hora >= 6 && hora < 12){
        img.src = '/image/manha.png'

    } else if (hora > 12 && hora < 18){
        img.src = '/image/tarde.png'

    } else {
        img.src = '/image/noite.png'
    }
}