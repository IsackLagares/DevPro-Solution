const modal = document.getElementById('modal'); 

function openModal() {
    modal.classList.add('view');

    function closeModal() {
        modal.classList.add('closeModal');
        setTimeout(function() {
            modal.classList.remove('view', 'closeModal');
        }, 500);
    }

    modal.addEventListener('click', (e) => {
        if (!modal.contains(e.target)) {
            closeModal();
        }
    });

    // Remova a classe 'closeModal' quando a animação de fechamento for concluída
    modal.addEventListener('animationend', () => {
        modal.classList.remove('closeModal');
    });
}

