/* crie um formulário com 3 campos, email senha , confirmação de senha e botão cadastrar */
// caso as senhas sejam iguais, exiba um alerta informando que o cadastro foi realizado com sucesso e insira o email na lista de usuários cadastrados. A lista de usuários cadastrados deverá ser renderizada abaixo do formulário e atualizada cada vez que um novo usuário seja cadastrado. Após isso limpar todos os valores dos campos
// caso a senha não seja igual, exiba um alerta informando que o cadastro falhou

import { useState } from "react"

function CadastroUsuario() {
    const [nome, setNome] = useState("")
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState('')
    const [confirmSenha, setConfirmSenha] = useState('')

    const users = []

    function handleSubmit(evento) {
        // remoção do comportamento pre definido do formulário
        evento.preventDefault()

        if(/* email != '' && */ senha === confirmSenha) {
            alert(`Nome: ${nome} \nEmail: ${email}`)
            alert('Todas as informações foram enviadas com sucesso')
           users.push(email)
            setNome('')
            setEmail('')

            console.log(users);
            
           
        }
        else{
            alert('Preencha todos os campos')
        }
    }


    return(
        <>
            <h4>Formulário de Revisão</h4>

            <form action="#" onSubmit={handleSubmit}>
                <label htmlFor="nome">Nome</label>
                <input type="text" name="nome" id="nome" placeholder="digite seu nome" value={nome}
                    onChange={(evento)=> setNome(evento.target.value)}
                />
                <br />
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" placeholder="exemplo@email.com" value={email}
                    onChange={(e)=> setEmail(e.target.value)}
                />
                <br />
                <label htmlFor="password">Senha</label>
                <input type="password" name="senha" id="senha" value={senha}
                    onChange={(e)=> setSenha(e.target.value)}
                />
                <br />
                <label htmlFor="confirmSenha">Confirmar Senha</label>
                <input type="password" name="confirmSenha" id="confirmSenha" value={confirmSenha}
                    onChange={(e)=> setConfirmSenha(e.target.value)}
                />
                <br />
                <button type="submit">Enviar</button>
            </form>

            <div>
                <h5>Informações	enviadas</h5>
                <ul>
                    <li>Nome: {nome} </li>
                    <li>Email: {email} </li>
                </ul>
            </div>
        </>
    )
}

export default CadastroUsuario