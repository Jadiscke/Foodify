const hideButtons = document.querySelectorAll('.recipe a');
for ( const hideButton of hideButtons ) {
  hideButton.addEventListener('click', (event) => {
    const hided = event.target.nextElementSibling;
    if (hided.classList.contains('hide')) {
      hideButton.innerText = 'Esconder';
    } else {
      hideButton.innerText = 'Mostrar';
    }
    return hided.classList.toggle('hide');
    
  });
}

