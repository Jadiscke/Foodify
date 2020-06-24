const modalOverlay = document.querySelector('.modal');
const cards = document.querySelectorAll('.cards');

const modalTitle = modalOverlay.querySelector('h3');
const modalAuthor = modalOverlay.querySelector('span');
const modalImg = modalOverlay.querySelector('img');
for (const card of cards) {

  card.addEventListener('click', (event) => {
    const targetCard = event.target;
    modalImg.src = targetCard.querySelector('img').src;
    modalTitle.innerHTML = targetCard.querySelector('.card-name').innerHTML;
    modalAuthor.innerHTML =targetCard.querySelector('.card-author').innerHTML;
    modalOverlay.classList.add('active');
  });
}

modalOverlay.querySelector('#close-modal').addEventListener('click', () => {
  modalOverlay.classList.remove('active');
})

