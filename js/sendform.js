const mainForm = document.querySelector('.form-test-drive');
//https://jsonplaceholder.typicode.com
mainForm.addEventListener('submit', (evt) => {
  evt.preventDefault();

  let objectData = {};

  for (let {name, value} of mainForm.elements) {
    
    if (name) {
      objectData[name] = value;
    }
  }

  fetch('https://jsonplaceholder.typicode.com/posts').then(response => {
    if (response.status === 200) {
      return response.json()
    }
  }).then(objectData => {
    console.log(objectData);
  })
});