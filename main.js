const button = document.getElementById('input-button');
const itemsList = document.getElementById('items-list');
let todoItems = JSON.parse(localStorage.getItem('items')) || [];
localStorage.setItem('items', JSON.stringify(todoItems));

const saveTodoItems = () => {
    localStorage.setItem('items', JSON.stringify(todoItems));
};

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

            const trashIcon = document.createElement('img');
            trashIcon.classList.add('trash-icon');
            trashIcon.src = 'https://img.icons8.com/material-rounded/24/000000/trash.png';
            todoItem.appendChild(div);
            todoItem.appendChild(trashIcon);

            itemsList.appendChild(todoItem);
            document.getElementById('todo-input').value = '';
        }

    });
}

const checkTodoItem = function(){
    
    itemsList.addEventListener('click', function(e){
        if (e.target && e.target.classList.contains('checkboxes') ) {
            const todoText = e.target.nextElementSibling;

            if(e.target.checked){
                todoText.classList.toggle('checked');
                findTodoItem(todoText.innerText).completed = true;

            } else {
                todoText.classList.toggle('checked');
                findTodoItem(todoText.innerText).completed = false;
            }
        }
    });
};

const deleteTodoItem = function(){
    itemsList.addEventListener('click', function(e){
        if (e.target && e.target.classList.contains('trash-icon')){
            const todoItem = e.target.parentNode;
            const todoItemText = todoItem.children[0].children[1].innerText;
            todoItems.splice(todoItems.findIndex(item => item.todo === todoItemText), 1);
            todoItem.remove();
        }
    });
};

addTodoItem();
checkTodoItem();
deleteTodoItem();




