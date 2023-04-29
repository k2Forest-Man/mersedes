const buttonFeatureLinks = document.querySelectorAll('.feature__link'); 
const listsButton = document.querySelectorAll('.feature-sub'); 

buttonFeatureLinks.forEach((item, index) => {
  item.addEventListener('click', () => {
    item.classList.toggle('feature__link_active')
    listsButton[index].classList.toggle('hidden')
  })
});
