const button = document.getElementById('input-button');
const itemsList = document.getElementById('items-list');
const checkboxes = itemsList.getElementsByClassName('checkboxes');

const todoItems = [];

const findTodo = function(todoText){
    return todoItems.find(element => element.todo === todoText );
};


const addItem = function(){
    button.addEventListener('click', function(){
        const input = document.getElementById('todo-input');
        input.classList.add('error');
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

const completeItem = function(){
    checkboxes.addEventListener('click', function(){
        
    });
};

addItem();