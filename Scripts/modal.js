const modal = document.getElementById('modal'); 

function openModal() {
    modal.style.display = 'block';
    modal.style.animation = 'openModal 0.5s';
}

window.onload = function () {
    document.onclick = function(element) {
        if(element.target.id !== 'modal' && element.target.id !== 'btn' && element.target.id !== 'input-box') {
            modal.style.animation = 'closeModal 0.5s';
            modal.style.display = 'none';
        }
    };
};




// function openModal() {
//     modal.classList.add('view');

//     function closeModal() {
//         modal.classList.add('closeModal');
//         setTimeout(function() {
//             modal.classList.remove('view', 'closeModal');
//         }, 500);
//     }
//     modal.style.display = 'block';
//     modal.style.animation = 'openModal 0.5s';
// }

//     modal.addEventListener('click', (e) => {
//         if (!modal.contains(e.target)) {
//             closeModal();
// window.onload = function () {
//     document.onclick = function(element) {
//         if(element.target.id !== 'modal' && element.target.id !== 'btn') {
//             modal.style.animation = 'closeModal 0.5s';
//             modal.style.display = 'none';
//         }
//     });
//     };
// };


//     // Remova a classe 'closeModal' quando a animação de fechamento for concluída
//     modal.addEventListener('animationend', () => {
//         modal.classList.remove('closeModal');
//     });
// }