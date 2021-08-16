const button = document.getElementById('input-button');
const itemsList = document.getElementById('items-list');
const todos = JSON.parse(localStorage.getItem('todos')) || [];

rendertodos();
addTodoItem();
checkTodoItem();
deleteTodoItem();




