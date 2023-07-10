const procurar = document.querySelector('#search')
const lista = document.querySelector('#list')

procurar.addEventListener('input', () => {
    const value = procurar.value.toLowerCase()
    const items = lista.getElementsByTagName('li')
    Array.from(items).forEach((item) => {
        const text = item.textContent.toLocaleLowerCase()
        if (text.indexOf(value) !== -1) {
            item.style.display = 'block'
        } else {
            item.style.display = 'none'
        }
    })
})