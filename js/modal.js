const arrOpenPopupButton = document.querySelectorAll('.more');
const modal = document.querySelector('.modal');

arrOpenPopupButton.forEach(itemButton => {
  itemButton.addEventListener('click', () => {
    modal.classList.remove('hidden');
  });
});

modal.addEventListener('click', (evt) => {
  const target = evt.target;

  if (target.classList.contains('overlay') || target.classList.contains('modal__close')) {
    modal.classList.add('hidden');
  }
});

window.addEventListener ('keydown', (evt) => {
  if(evt.key === ('Escape' || 'Esc')) {
    if(!modal.classList.contains('hidden')) {
      evt.preventDefault();
      modal.classList.add('hidden');
    }
  }
});