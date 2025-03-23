

function CalcularImc({ altura, peso, sexo, idade }) {

    return (
        <>
            <h2>IMC</h2>

            <p>A altura é {altura} o peso é {peso} o sexo é {sexo} e o IMC é {peso/altura*altura}</p>

        </>
    )
}

export default CalcularImc