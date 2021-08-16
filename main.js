const button = document.getElementById('input-button');
const input = document.querySelector('#todo-input');
const itemsList = document.getElementById('items-list');
const todos = JSON.parse(localStorage.getItem('todos')) || [];

// adding todo item when user hits enter
input.addEventListener('keydown', (e) => {
    if(e.key === 'Enter'){
        addTodoItem();
    }
});

// adding todo item when user clicks the button
button.addEventListener('click', (e) => {
    addTodoItem();
});

rendertodos();
checkTodoItem();
deleteTodoItem();




