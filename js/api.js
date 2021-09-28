const checkStatus = (status) => {
    if(status) {
        return "completed";
    }else {
        return "not-completed";
    }
}
const criarCard = (userId,id,title,completed) => {
    let card = 
    `
    <div class="todo ${checkStatus(completed)}">

        <li class="todo-item">${id}</li>
        <p class="todo-descricao">${title}</p>
        <span>${userId}</span>
        <button class="complete-btn">OK</button>
        <button class="delete-btn">X</button>
    </div>
    `
    return card;
}

window.onload = () => {
    const options = {
        method: 'GET',
        mode: 'cors',
        cache: 'default'
    }

    fetch(`https://jsonplaceholder.typicode.com/todos/`, options)
        .then(response => {
            response.json()
            .then (dados => {
                for(let dado of dados) {
                    let card = criarCard(dado.userId,dado.id,dado.title,dado.completed);

                    let todoList = document.querySelector(".todo-list"); 
                    todoList.insertAdjacentHTML("beforeend",card); 
                }

            })
        })
}