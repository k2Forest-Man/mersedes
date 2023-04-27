const tabsHandlerElements = document.querySelectorAll('[data-tabs-handler]');
const tabsContentElements = document.querySelectorAll('[data-tabs-field]');

for (let button of tabsHandlerElements) {
  button.addEventListener ('click', () => {
    tabsHandlerElements.forEach (item => item.classList.remove('design-list__item_active'));
    button.classList.add('design-list__item_active');

    tabsContentElements.forEach (itemCont => {
      if (itemCont.dataset.tabsField === button.dataset.tabsHandler) {
        itemCont.classList.remove('hidden');
      } else {
        itemCont.classList.add('hidden');
      }
    })
  })
};

