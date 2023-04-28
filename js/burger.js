const burgerButton = document.querySelector('.humburger-menu');
const menuActive = document.querySelector('.menu');

const getToggleMenu = () => {
  menuActive.classList.toggle('menu-active');
  burgerButton.classList.toggle('humburger-menu-active');
};

//Добавляем классы через обработчик
burgerButton.addEventListener('click', () => getToggleMenu());

export { burgerButton, menuActive};