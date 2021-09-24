let btn = document.getElementById('btn-criar');
let containerCard = document.querySelector('.container-card');
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
                    console.log(dado.id);
                    let card = `
                    <div class="todo-card">
                        <div class="header-card">
                            <span>${dado.id}</span>
                            <h3>${dado.completed}</h3>
                            <span>excluir</span>
                        </div>
                        <p class="main-card">
                        ${dado.title}
                        </p>
                        <div class="footer-card">
                            <div><h4>CRIADO EM</h4><span>01/01/21</span></div>
                            <div><h4>DATA LIMITE</h4><span>05/01/21</span></div>
                        </div>
                    </div>
                    `
                    containerCard.innerHTML += card;
                }
            })
        })
})
