const tabsHandlerElements = document.querySelectorAll('[data-tabs-handler]');
const tabsContentElements = document.querySelectorAll('[data-tabs-field]');
const tabsHeaderElements = document.querySelectorAll('[data-tabs-header]');

for (let button of tabsHandlerElements) {
  //Навешиваем через клик актвный таб
  button.addEventListener ('click', () => {
    tabsHandlerElements.forEach (item => item.classList.remove('design-list__item_active'));
    button.classList.add('design-list__item_active');

    //Переключение табов описания блоков и фото
    tabsContentElements.forEach (itemCont => {
      if (itemCont.dataset.tabsField === button.dataset.tabsHandler) {
        itemCont.classList.remove('hidden');
      } else {
        itemCont.classList.add('hidden');
      }
    })

    //Переключение табов описания заголовков
    tabsHeaderElements.forEach (itemHeader => {
      if (itemHeader.dataset.tabsHeader === button.dataset.tabsHandler) {
        itemHeader.classList.remove('hidden');
      } else {
        itemHeader.classList.add('hidden');
      }
    })

  })
};

