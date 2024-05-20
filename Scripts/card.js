const contact = document.getElementById('contact');
const card = document.getElementById('card');

function openCard() {
    contact.addEventListener('mouseover', () => {
        card.style.display = 'block';
        card.style.animation = 'openCard 0.5s';
    });
}

function showCard() {
    if (card.classList.contains('closed')) {
        card.classList.remove('closed');
    } else {
        card.classList.add('closed');
    }
}

function closeCard() {
    contact.addEventListener('mouseout', () => {
        card.style.display = 'none';
        card.style.animation = 'closeCard 0.5s';
    });
}