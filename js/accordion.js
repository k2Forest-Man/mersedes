const buttonFeatureLink = document.querySelector('.feature__link');
const buttonFeatureLinks = document.querySelectorAll('.feature__link'); 
const listsButton = document.querySelectorAll('.feature-sub'); 

buttonFeatureLinks.forEach((item, index ) => {
  item.addEventListener ('click', () => {
    buttonFeatureLinks.forEach((item ) => {
      item.classList.remove ('feature__link_active')
    });

    item.classList.toggle ('feature__link_active');

    listsButton.forEach((listItem ) => {
      listItem.classList.add ('hidden')
    })

    listsButton[index].classList.remove('hidden');
  })
})