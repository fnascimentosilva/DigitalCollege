import { useState } from "react"

function LoginSenhaEmail() {

    const [senha, setSenha] = useState('')
    const [email, setEmail] = useState('')
    // se o email ou senha estiverem vazios ou incorretos, exibir um alerta pedindo para preencher os campos corretamente e informar que o acesso foi negado
    // se o email e senha estiverem corretos, exibir um alerta informando que o acesso foi concedido e fazer a limpeza dis valores dos campos

    const senhaCorreta = '1234'
    const emailCorreto = 'cleitinho@gatolaranja.com'

    function handleSubmit(event) {
        event.preventDefault()

        if(senha === senhaCorreta && email === emailCorreto){

            alert('Formulário enviado')
            setEmail('')
            setSenha('')

        }else{
            alert('Seus dados estão incorretos')
        }


    }


    return (
        <div style={{
            maxWidth: "400px", margin: "auto", textAlign: "center"
        }}>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <label for="email">Email:</label>
                <input type="email" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <br />
                <label for="senha">Senha:</label>
                <input type="password" name="senha" id="senha" value={senha} onChange={(e) => setSenha(e.target.value)} />
                <br />
                <button type="submit">Entrar</button>
            </form>

        </div>
    )
}

export default LoginSenhaEmail