// Validação se está completa ou imncompleta na API
const checkStatus = (status) => {
    if(status) {
        return "completed";
    }else {
        return "not-completed";
    }
}

// Função para criar os cards que receberão os dados da API
const criarCard = (userId,id,title,completed) => {
    let card = 
    `
    <div class="todo ${checkStatus(completed)}">

        <li class="todo-item">${id}</li>
        <p class="todo-descricao">${title}</p>
        <span>${userId}</span>
        <button class="complete-btn"><i class="fas fa-check"></i></button>
        <button class="delete-btn"><i class="fas fa-trash-alt"></i></button>
    </div>
    `
    return card;
}

// Função para carregar os dados, assim que a janela abrir
window.onload = () => {
    const options = {
        method: 'GET',
        mode: 'cors',
        cache: 'default'
    }
// Requisição da API
    fetch(`https://jsonplaceholder.typicode.com/todos/`, options)
        .then(response => {
            response.json()
            .then (dados => {
                //Para cada dado na API, deve-se criar um card
                for(let dado of dados) {
                    let card = criarCard(dado.userId,dado.id,dado.title,dado.completed);
                    let todoList = document.querySelector(".todo-list"); 
                    todoList.insertAdjacentHTML("beforeend",card); 
                }

            })
        })
}