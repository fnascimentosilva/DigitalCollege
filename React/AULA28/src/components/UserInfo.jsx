import { useState } from "react"

function UserInfo() {
    let [name, setName] = useState('')
    let [email, setEmail] = useState('')

    function ativarForm(event) {
        event.preventDefault()

        name = prompt('Digite o seu nome: ')
        setName(name)
        email = prompt('Digite o seu email: ')
        setEmail(email)

        { alert(`Seu nome é ${name} e email é ${email}`) }

    }

    return (
        <div>
            <button onClick={ativarForm}>Iniciar Form</button>
        </div>
    )
}

export default UserInfo

