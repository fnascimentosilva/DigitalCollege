

function CardFilmes(props) {
    return (
        <>
            <img src={props.imagem} alt="imagem" />
            <h1>{`${props.titulo}`}</h1>

            <p>{`nota: ${props.nota}`}</p>
            <p>{`duracão: ${props.duracao}`}</p>
            <p>{`estréia: ${props.data}`}</p>
            <p>{`elenco: ${props.elenco}`}</p>
            <p>Sinopse: {props.sinopse}</p>
        </>)
}

export default CardFilmes