const todoList = JSON.parse(localStorage.getItem('todoList')) || [];


function renderTodoList() {
  let todoListHTML = '';

  for (let i = 0; i < todoList.length; i++) {
    const todoObject = todoList[i];
    const { name, dueTime } = todoObject;

    const html = `
       <div> ${name}</div>
        <div>${dueTime}</div>
        <button onclick="
            todoList.splice(${i}, 1);
            renderTodoList();"
            class="done-css"
        >Done</button>
        `;
    todoListHTML += html;
  }

  document.querySelector('.js-todo-list').innerHTML = todoListHTML; // Replace existing content
}

function addTodo() {
  const inputElement = document.querySelector('.js-input');
  const name = inputElement.value;

  const dueTimeElement = document.querySelector('.js-time-input');
  const dueTime = dueTimeElement.value;

  if(name && dueTime)//Ensures there is no addition of empty todo 
  { todoList.push({ name, dueTime})
      saveTodoList(); 
      renderTodoList();}

  inputElement.value = '';
  dueTimeElement.value = ''; 

  renderTodoList();
}
function saveTodoList (){
  localStorage.setItem('todoList',JSON.stringify(todoList));
}
renderTodoList();
