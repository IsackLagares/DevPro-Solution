const modal = document.getElementById('modal');
const tmodal = document.getElementById('tmodal');

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

function openTModal() {
    modal.style.animation = 'closeModal 0.5s';
    modal.style.display = 'none';
    setTimeout(() => {
        tmodal.style.animation = 'openModal 0.5s';
    }, 500);
}

const contact = document.getElementById('contact');
const card = document.getElementById('card');

function openCard() {
    contact.addEventListener('mouseover', () => {
        card.style.display = 'block';
        card.style.animation = 'openCard 0.5s';
    });
}

// function showCard() {
//     card.addEventListener('mouseover', () => {
//         card.style.display = 'block';
//         card.style.animation = 'openCard 0.5s';
//     });
// }

function showCard() {
    if (card.classList.contains('closed')) {
        card.classList.remove('closed');
    } else {
        card.classList.add('closed');
    }
}

function hideCard() {
    contact.addEventListener('mouseout', () => {
        card.style.display = 'none';
    });
}

function closeCard() {
    contact.addEventListener('mouseout', () => {
        card.style.display = 'contents';
        setTimeout(() => {
            card.style.animation = 'closeCard 5.0s';
        }, 5000);
    });
}
