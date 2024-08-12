localStorage.setItem('number', 123);
localStorage.setItem('boolean', true);

console.log(localStorage.getItem('number')); // "123"
console.log(localStorage.getItem('boolean')); // "true"

const user = {
    name: "Alex",
    age: 25
  };
  
  // Сохранение объекта в localStorage
  localStorage.setItem('user', JSON.stringify(user));
  
  // Извлечение объекта из localStorage
  const retrievedUser = JSON.parse(localStorage.getItem('user'));
  console.log(retrievedUser.name); // "Alex"


  localStorage.setItem('theme', 'dark');
  // Проверяем, установлена ли тема 'dark' в localStorage
if (localStorage.getItem('theme') === 'dark') { 
    // Если установлена темная тема, применяем ее к body документа
    document.body.style.backgroundColor = "#000";
  }

  localStorage.setItem('someData', 123);
  // Пытаемся получить данные из localStorage по ключу 'someData'
const cachedData = localStorage.getItem('someData');

// Проверяем, существуют ли данные в кэше
if (cachedData) {
  // Если данные существуют, преобразуем их из строки в объект или массив и обрабатываем
  JSON.parse(cachedData);
} else {
  // Если данных в кэше нет, делаем запрос к серверу за данными
  fetchDataFromServer().then(data => {
    // После получения данных сохраним их в localStorage для дальнейшего использования
    localStorage.setItem('someData', JSON.stringify(data));

    // Обрабатываем полученные с сервера данные
    processData(data);
  });
}

// Пытаемся получить список задач из localStorage. Если его нет, используем пустой массив.
const tasks = JSON.parse(localStorage.getItem('tasks')) || [];

// Функция для добавления задачи
function addTask(task) {
    // Добавляем новую задачу в массив
    tasks.push(task);

    // Сохраняем обновленный список задач в localStorage
    localStorage.setItem('tasks', JSON.stringify(tasks));

    // Обновляем отображение списка задач на странице (предполагается, что функция renderTasks определена где-то еще)
    renderTasks();
}

localStorage.removeItem('number');

localStorage.clear();