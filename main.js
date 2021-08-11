const button = document.getElementById('input-button');
const itemsList = document.getElementById('items-list');
let todoItems = JSON.parse(localStorage.getItem('items')) || [];
localStorage.setItem('items', JSON.stringify(todoItems));

const saveTodoItems = () => {
    localStorage.setItem('items', JSON.stringify(todoItems));
};

const renderTodoItems = () => {
    todoItems = JSON.parse(localStorage.getItem('items'));

    if (todoItems && todoItems.length > 0){

        document.addEventListener('DOMContentLoaded', (e) => {
            todoItems.forEach(item => {
                itemsList.appendChild(createItem(item.todo, item.completed));
            });
        });
    }

};

const createItem = (todoItemText, completed) => {
    const todoItem = document.createElement('li');
    todoItem.classList.add('item');
    const div = document.createElement('div');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.value = todoItemText;
    checkbox.classList.add('checkboxes');
    div.appendChild(checkbox);

    const span = document.createElement('span');
    span.textContent = todoItemText;
    div.appendChild(span);

    if (completed){
        checkbox.checked = true;
        span.classList.add('checked');
    }

    const trashIcon = document.createElement('img');
    trashIcon.classList.add('trash-icon');
    trashIcon.src = 'https://img.icons8.com/material-rounded/24/000000/trash.png';
    todoItem.appendChild(div);
    todoItem.appendChild(trashIcon);

    return todoItem;
};

const findTodoItem = todoText => todoItems.find(item => item.todo === todoText);


const addTodoItem = function(){
    button.addEventListener('click', function(){
        const input = document.getElementById('todo-input');
        const todoItemText = input.value;

        if(todoItemText.trim() === ''){
            input.classList.add('error');
            input.placeholder = 'You can\'t add a blank item!';
        } else {
            input.classList.remove('error');
            input.placeholder = 'What do you need to do?';
            todoItems.push({
                todo: todoItemText,
                completed: false
            });
            saveTodoItems();
            itemsList.appendChild(createItem(todoItemText, false));
            document.getElementById('todo-input').value = '';
        }

    });
}

const checkTodoItem = function(){
    
    itemsList.addEventListener('click', (e) => {
        if (e.target && e.target.classList.contains('checkboxes') ) {
            const todoText = e.target.nextElementSibling;

            if(e.target.checked){
                todoText.classList.toggle('checked');
                findTodoItem(todoText.innerText).completed = true;

            } else {
                todoText.classList.toggle('checked');
                findTodoItem(todoText.innerText).completed = false;
            }
            saveTodoItems();
        }
    });
};

const deleteTodoItem = function(){
    itemsList.addEventListener('click', (e) => {
        if (e.target && e.target.classList.contains('trash-icon')){
            const todoItem = e.target.parentNode;
            const todoItemText = todoItem.children[0].children[1].innerText;
            todoItems.splice(todoItems.findIndex(item => item.todo === todoItemText), 1);
            saveTodoItems();
            todoItem.remove();

        }
    });
};

renderTodoItems();
addTodoItem();
checkTodoItem();
deleteTodoItem();




