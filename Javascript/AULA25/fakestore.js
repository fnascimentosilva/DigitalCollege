/* let newUser = {
    
        "id": 0,
        "username": "Fabricio",
        "email": "fabricio@gmail.com",
        "password": "12345fa"
        
}



function NewUser(user){
    fetch('https://fakestoreapi.com/users',{
        method:'POST', 
        headers: {'Content-type': 'application/json'},
        body: JSON.stringify(user)
    }).then(response => {
        console.log(response.status)
        return response.json()
        
    }).then(user => {
        console.log(user)
        
    }).catch(erro => console.log(erro)
    )
} */

let names = document.getElementById('listaUsuarios')
let nameUsers = []


async function GetAllUsers() {
    try {
        let response = await fetch('https://fakestoreapi.com/users')

        let users = await response.json()

        let status = await response.status

        console.log(status);

        names.style.listStyleType = 'none'

        for (let i = 0; i < users.length; i++) {

            nameUsers[i] = document.createElement('li')
            nameUsers[i].innerText = `${users[i].name.firstname} ${users[i].name.lastname}`
            names.appendChild(nameUsers[i])

        }


    } catch (error) {
        console.log(error);

    }
}


GetAllUsers()

// para o formulário de excluir carrinho, crie uma função que capta o valor digitado no input e usa ele para excluir o carrinho correspondente. Essa função será executa quando o botão de excluir for clicado.

async function DeleteCarrinho() {
    // selecionar o valor do campo do formulário
    let id = document.getElementById('carrinho').value
    // criar o endpoint para excluir o carrinho
    // usar o fetch para excluir o carrinho
    // mostrar se foi excluido ou nao
    
}