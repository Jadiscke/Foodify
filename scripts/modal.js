const modalOverlay = document.querySelector('.modal');
const cards = document.querySelectorAll('.cards');

const modalTitle = modalOverlay.querySelector('h3');
const modalAuthor = modalOverlay.querySelector('span');
for (const card of cards) {

  card.addEventListener('click', (event) => {
    const targetCard = event.target;
    modalTitle.innerHTML = targetCard.querySelector('.card-name').innerHTML;
    modalAuthor.innerHTML =targetCard.querySelector('.card-author').innerHTML;
    modalOverlay.classList.add('active');
  });
}

modalOverlay.querySelector('#close-modal').addEventListener('click', () => {
  modalOverlay.classList.remove('active');
})

