const button = document.getElementById('input-button');
const itemsList = document.getElementById('items-list');
let todoItems = [];


function addItem(){
    button.addEventListener('click', function(){
        let input = document.getElementById('todo-input');
        let todoItemText = input.value;

        if(todoItemText.trim() === ''){
            input.classList.add('error');
            input.placeholder = 'You can\'t add a blank item!';
        } else {
            todoItems.push(todoItemText);
            let todoItem = document.createElement('li');
            todoItem.classList.add('item')
            todoItem.innerHTML = `${todoItemText} <img class="trash-icon" src="https://img.icons8.com/material-rounded/24/000000/trash.png"/> `;
            itemsList.appendChild(todoItem);
            document.getElementById('todo-input').value = '';
        }
        



    });
}
addItem();