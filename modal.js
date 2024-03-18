function openModal() {
    const modal = document.getElementById('modal')
    modal.classList.add('mostrar')

    modal.addEventListener('click', (e) => {
        if (e.target.id == 'modal' || e.target.id == 'fechar') {
            modal.classList.remove('mostrar')
            localStorage.fechaModal = 'modal'
        }
    })
}