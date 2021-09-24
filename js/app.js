let btn = document.getElementById('btn-criar');
let containerCard = document.querySelector('.container-card');
function checkIfComplete(tarefa) {
    if(tarefa) {

        return "<h3 class='completado'>completado</h3>";
    }else {
        return "<h3 class='nao-completado'>não completado</h3>";
    }
}
function cardFactory(id,completed,title) {
    let card = 
    `
    <div class="todo-card">
        <div class="header-card">
            <span>${id}</span>
            ${checkIfComplete(completed)}
            <span>excluir</span>
        </div>
        <p class="main-card">
        ${title}
        </p>
        <div class="footer-card">
            <div><h4>CRIADO EM</h4><span>01/01/21</span></div>
            <div><h4>DATA LIMITE</h4><span>05/01/21</span></div>
        </div>
    </div>
    `
    return card;
}
btn.addEventListener("click", (e) => {
    e.preventDefault();
    const options = {
        method: 'GET',
        mode: 'cors',
        cache: 'default'
    }
    fetch(`https://jsonplaceholder.typicode.com/todos/`, options)
        .then(response => {
            response.json()
            .then (dados => {
                for(dado of dados) {
                    let card = cardFactory(dado.id,dado.completed,dado.title);
                    containerCard.innerHTML += card;
                }
            })
        })  
})
