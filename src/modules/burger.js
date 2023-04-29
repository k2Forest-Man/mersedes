const burgerButton = document.querySelector('.humburger-menu');
const menuActive = document.querySelector('.menu');

const burgerModule = () => {
  const getToggleMenu = () => {
    menuActive.classList.toggle('menu-active');
    burgerButton.classList.toggle('humburger-menu-active');
  };

  burgerButton.addEventListener('click', () => getToggleMenu());
}

export { burgerButton, menuActive };
export default burgerModule;