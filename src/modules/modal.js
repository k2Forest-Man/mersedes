const modalModule = () => {

  const openPopupButton = document.querySelectorAll('.more');
  const modal = document.querySelector('.modal');

  openPopupButton.forEach((itemBtn) => {
    itemBtn.addEventListener('click', () => {
      modal.classList.remove('hidden');
    });
  });
  
  modal.addEventListener('click', (evt) => {
    const target = evt.target;

    if (target.classList.contains('overlay') || target.classList.contains('modal__close')) {
      modal.classList.add('hidden');
    }
  });

  window.addEventListener('keydown', (evt) => {
    if (evt.key === ('Escape' || 'Esc')) {
      if (!modal.classList.contains('hidden')) {
        evt.preventDefault();
        modal.classList.add('hidden');
      }
    }
  });
}

export default modalModule;