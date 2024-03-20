function openModal() {
    const modal = document.getElementById('modal')
    modal.classList.add('view')

    modal.addEventListener('blur', (e) => {
        modal.classList.remove('view')
    })
    modal.addEventListener('click', (e) => {
        if(e.target.id == 'btn') {
        modal.classList.remove('view')
        }
    })
}