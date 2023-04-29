const sendformModule = (formClass) => {
  const mainForm = document.querySelector(formClass);

  mainForm.addEventListener('submit', (evt) => {
    evt.preventDefault();

    let objectData = {};

    for (let { name, value } of mainForm.elements) {

      if (name) {
        objectData[name] = value
      }
    }

    //Отправляем данные формы на сервер
    //Добавляем вывод ошибокgit 
    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify(objectData)
    })
      .then(response => {
        if (response.status === 200 || response.status === 201) {
          return response.json()
        } else {
          throw new Error(response.status)
        }
      })
      .then(objectData => {
        alert('Данные успешно сохранены!')
        mainForm.reset()
      })
      .catch(error => {
        alert('Произошла ошибка, статус ' + error.message)
      })
  });
};

export default sendformModule;