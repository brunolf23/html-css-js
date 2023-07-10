const textInput = document.getElementById('text-input')
const countButtom = document.getElementById('count-buttom')
const result = document.getElementById('result')

function contador() {
    const text = textInput.value
    const count = text.length
    result.textContent = `O texto contem ${count} letras.`
}

countButtom.addEventListener('click', contador)