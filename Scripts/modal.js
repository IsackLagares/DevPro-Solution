const modal = document.getElementById('modal');

function openModal() {
    modal.style.display = 'block';
    modal.style.animation = 'openModal 0.5s';
}

window.onload = function () {
    document.onclick = function (element) {
        if (element.target.id !== 'modal' && element.target.id !== 'send' && element.target.id !== 'home-btn' && element.target.id !== 'input-box') {
            modal.style.animation = 'closeModal 0.5s';
            modal.style.display = 'none';
        }
    };
}