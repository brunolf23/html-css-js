document.querySelector('.gallery').addEventListener('click', (event) => {
    if (event.target.tagName === 'IMG') {
         const modal = document.createElement('div')
         modal.classList.add('modal')
         
         const modalImg = document.createElement('img')
         modalImg.src = event.target.src
         modal.appendChild(modalImg)
         document.body.appendChild(modal)
        modal.addEventListener('click', () => {
            document.body.removeChild(modal)
        })
    }
})