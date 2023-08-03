const images = [
    "imagem/copo_de_cerveja.jpg",
    "imagem/xicara_de_cafe.jpg",
    "imagem/xicara_de_cha.jpg"
]

let currentIndex = 0

let imageElement = document.getElementById('image')
let buttonElement = document.getElementById('button')

buttonElement.addEventListener('click', function() {
    currentIndex++
    if (currentIndex >= images.length) {
        currentIndex = 0
    }
    imageElement.src = images[currentIndex]
})