// Seletores
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button')
const todoContainer = document.querySelector('.todo-container');
const todoList = document.querySelector('.todo-list');
const todoDescricao = document.getElementById('todoDescricao')
const todoData = document.getElementById('todoData')
const todoDataFinal = document.getElementById('todoDataFinal')
const todoTitulo = document.getElementById('todo-titulo');
//Event Listeners
document.addEventListener('DOMContentLoaded', getLocalTodo)
todoButton.addEventListener("click", addTodo);
todoList.addEventListener('click', deleteCheck);


// Funções
function addTodo(event) {
    // Previnindo o form de submeter
    event.preventDefault();

    if(todoTitulo.value != "" && todoDescricao.value != "" && todoDataFinal.value != "") {
        // Criando a div do toDo
        const todoDiv = document.createElement('div');
        todoDiv.classList.add('todo');

        //Criando  a li, informações do toDo
        // Todo Titulo
        const newTodo = document.createElement('li');
        newTodo.innerHTML = todoInput.value
        newTodo.classList.add('todo-item');

        //Todo Descriçao
        const newTodoDescricao = document.createElement('p')
        newTodoDescricao.innerHTML = todoDescricao.value
        newTodoDescricao.classList.add('todo-descricao');

        //Todo Data
        const newTodoData = document.createElement('p')
        let today = new Date(); 
        newTodoData.innerHTML = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate(); 
        const newTodoDataFInal = document.createElement('p')
        newTodoDataFInal.innerHTML = todoDataFinal.value
        newTodoData.classList.add('todo-data');
        newTodoDataFInal.classList.add('todo-data-final');

        // Adicionando a DIV
        todoDiv.appendChild(newTodo);
        todoDiv.appendChild(newTodoDescricao);
        todoDiv.appendChild(newTodoData);
        todoDiv.appendChild(newTodoDataFInal);

        // Add todo ao LocalStorage
        salvarTodos(todoInput.value, todoDescricao.value)

        //Button checado
        const completedButton =  document.createElement('button');
        completedButton.innerText = 'OK'
        completedButton.classList.add('complete-btn')
        todoDiv.appendChild(completedButton);

        //Button delete
        const deleteButton =  document.createElement('button');
        deleteButton.innerText = 'X'
        deleteButton.classList.add('delete-btn')
        todoDiv.appendChild(deleteButton);

        //Populando html estático - ul
        todoList.appendChild(todoDiv);

        // Limpando o input
        todoInput.value = "";
        todoDescricao.value = '';
    }else {
        alert("Existem campos vazios!");
    }
    
}

// função para validar


// Função para deletar
function deleteCheck(e){
    const item = e.target;

    // Delete
    if(item.classList[0] === "delete-btn"){
        const todo = item.parentElement;
        
        //Animação
        todo.classList.add('fall')
        removeLocalTodo(todo);
        todo.addEventListener('transitionend', () => {
            todo.remove();
        })
        
    }

    // Marca 
    if(item.classList[0] === "complete-btn"){
        const todo = item.parentElement;
        todo.classList.toggle('completed');
    }

}

// Salvar todos
function salvarTodos(todo){
    let todos; // Primeiro verifica se já temos todos
    if(localStorage.getItem('todos') === null){ // Se não tivermos, cria uma array vazio
        todos = []; 
    }else{
        todos = JSON.parse(localStorage.getItem('todos'));
    }   // Se tivervmos vamos add
    todos.push(todo);
    localStorage.setItem('todos', JSON.stringify(todos));
}

function getLocalTodo(todo){
    let todos; 
    if(localStorage.getItem('todos') === null){ 
        todos = []; 
    }else{
        todos = JSON.parse(localStorage.getItem('todos'));
    }  

    for (const todo of todos) {
        // Criando a div do toDo
        const todoDiv = document.createElement('div');
        todoDiv.classList.add('todo');
    
        //Criando  a li, informações do toDo
        const newTodo = document.createElement('li');
        newTodo.innerHTML = todo;
        newTodo.classList.add('todo-item');
        
        //Todo Descriçao
        const newTodoDescricao = document.createElement('p')
        newTodoDescricao.innerHTML = todoDescricao.value
        newTodoDescricao.classList.add('todo-descricao');
        
        //Todo Data
        const newTodoData = document.createElement('p')
        newTodoData.innerHTML = todoData.value
        const newTodoDataFInal = document.createElement('p')
        newTodoDataFInal.innerHTML = todoDataFinal.value
        newTodoData.classList.add('todo-data');
        newTodoDataFInal.classList.add('todo-data-final');
        
        // Adicionando ao HTML
        todoDiv.appendChild(newTodo);
        todoDiv.appendChild(newTodoDescricao);
        todoDiv.appendChild(newTodoData);
        todoDiv.appendChild(newTodoDataFInal);
        
        //Button checado
        const completedButton =  document.createElement('button');
        completedButton.innerText = 'OK'
        completedButton.classList.add('complete-btn')
        todoDiv.appendChild(completedButton);

        //Button delete
        const deleteButton =  document.createElement('button');
        deleteButton.innerText = 'X'
        deleteButton.classList.add('delete-btn')
        todoDiv.appendChild(deleteButton);

        //Populando html estático
        todoList.appendChild(todoDiv);
    }
}

function removeLocalTodo(todo){
    let todos; 
    if(localStorage.getItem('todos') === null){ 
        todos = []; 
    }else{
        todos = JSON.parse(localStorage.getItem('todos'));
    }  
    const todoIndex = todo.children[0].innerText;
    todos.splice(todos.indexOf(todoIndex), 1);
    localStorage.setItem('todos', JSON.stringify(todos));
}

