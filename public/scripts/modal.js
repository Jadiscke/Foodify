const cards = document.querySelectorAll('.cards');

for (const card of cards) {

  card.addEventListener('click', (event) => {
    const targetCard = event.target;
    window.location.href = `/recipes/${targetCard.id}`
  });
  
}
