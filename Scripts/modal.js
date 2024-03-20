function openModal() {
    const modal = document.getElementById('modal')
    modal.classList.add('view')

    modal.addEventListener('blur', (e) => {
        modal.classList.remove('view')
    })
}