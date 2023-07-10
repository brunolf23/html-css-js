const contador = document.getElementById('contador')
const crescenteBotao = document.getElementById('crescente')
const decrescenteBotao = document.getElementById('decrescente')
const resetarBotao = document.getElementById('resetar')

let contador2 = 0

function atualizarContador() {
    contador.textContent = contador2
}

crescenteBotao.addEventListener('click', function() {
    contador2++
    atualizarContador()
})

decrescenteBotao.addEventListener('click', function() {
    if (contador2 > 0) {
        contador2--
    atualizarContador()
    }
})

resetarBotao.addEventListener('click', function() {
    contador2 = 0
    atualizarContador()
})