const savetodos = () => {
    localStorage.setItem('todos', JSON.stringify(todos));
};

const rendertodos = () => {
    itemsList.innerHTML = '';
    todos.forEach(todo => {
        itemsList.appendChild(createItem(todo))
    })
};

const createItem = (todo) => {
    const todoItem = document.createElement('li');
    todoItem.classList.add('item');
    const div = document.createElement('div');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.classList.add('checkboxes');
    div.appendChild(checkbox);

    const span = document.createElement('span');
    span.textContent = todo.text;
    div.appendChild(span);

    if (todo.completed){
        checkbox.checked = true;
        span.classList.add('checked');
    }

    const trashIcon = document.createElement('img');
    trashIcon.classList.add('trash-icon');
    trashIcon.src = 'https://img.icons8.com/material-rounded/24/000000/trash.png';
    todoItem.appendChild(div);
    todoItem.appendChild(trashIcon);
    todoItem.id = todo.id;

    return todoItem;
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
            todos.push({
                id: Date.now() + Math.random(),
                text: todoItemText,
                completed: false
            });
            savetodos();
            document.getElementById('todo-input').value = '';
            rendertodos();
        }

    });
}

const checkTodoItem = function(){
    itemsList.addEventListener('click', (e) => {
        if (e.target && e.target.classList.contains('checkboxes') ) {
            const todoId = parseFloat(e.target.parentNode.parentNode.id);
            const todoText = e.target.nextElementSibling;
            const todoIndex = todos.findIndex(todo => todo.id === todoId);        
            todoText.classList.toggle('checked');
            todos[todoIndex].completed = e.target.checked;

            savetodos();
        }
    });
};

const deleteTodoItem = function(){
    itemsList.addEventListener('click', (e) => {
        if (e.target && e.target.classList.contains('trash-icon')){
            const todoItem = e.target.parentNode;
            const todoItemId = parseFloat(todoItem.id);
            const index = todos.findIndex(todo => todo.id === todoItemId);
            todos.splice(index, 1);
            savetodos();
            todoItem.remove();
        }
    });
};