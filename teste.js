let btn = document.getElementById('btn-criar');
// função mostrarDados
const mostrarDados = (result) => {
    for(const campo in result) {
        if(document.querySelector("#"+campo)) { // função que preencherá os campos
            document.querySelector("#"+campo).value = result[campo];
        }
    }
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
            console.log(response.json())
            .then (dado => console.log(dado))
        })
})
