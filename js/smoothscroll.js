const linksHeader = document.querySelectorAll('.menu-list__link');
const buttonMainScroll = document.querySelector('.main__scroll');
const testDriveButton = document.querySelector('.main__button');
const arrayLinks = [...linksHeader, buttonMainScroll, testDriveButton]; //Спрет оператор??


arrayLinks.forEach(itemLink => {
  itemLink.addEventListener('click', (evt) => {
    evt.preventDefault();
    
    //При клике на ссылку, находим ее путь по id и отрезаем 1 символ(#)
    const linkId = evt.target.getAttribute('href').substr(1);

    document.getElementById(linkId).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  })
});