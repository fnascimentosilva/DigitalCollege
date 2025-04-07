import { useEffect } from "react"
import { useState } from "react"

function BuscarCep() {

    const [objetoCEP, setObjetoCEP] = useState({})
    const [numeroCEP, setNumeroCEP] = useState('')
    const [url, setUrl] = useState(`https://viacep.com.br/ws/${numeroCEP}/json/`)

    function buscarCep() {
        fetch(url)
            .then(response => response.json())
            .then(data => {
                setObjetoCEP(data)
            }).catch(erro => console.log(erro));
    }

    useEffect(() => {
        // essa função será executada toda vez que o componente for montado ou a url for alterada
        buscarCep()
    }, [url])

    function handleClick() {
        console.log(objetoCEP);

    }

    return (<div>
        <input type="number" placeholder="digite o cep apenas números" onChange={(e) => setNumeroCEP(Number(e.target.value))} /> {/* essa funcao sera executada toda vez que o input for alterado mudando o número do cep */}
        <button onClick={handleClick}>Buscar CEP</button>
        {/* essa função vai ser executada toda vez que o botão for clicado mudando o cep e a url */}

        <p>CEP:{objetoCEP.cep} Rua: {objetoCEP.logradouro} Bairro: {objetoCEP.bairro} </p>
    </div>)

}

export default BuscarCep