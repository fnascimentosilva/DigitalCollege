// com base em um array de palavras, crie um novo array com objetos que terão as seguintes propriedades: palavra e quantidade de letras

let palavras = ['gato', 'pássaro', 'capivara', 'serpente', 'papagaio']

// [
//     {palavra: 'gato',
//     quantidadeLetras: 4}
//     
//]

let QtdLetras = palavras.map((palavra) => {
    let qtdLetrasPalavra = {
        palavra: palavra,
        letras: palavra.length
    }
    return qtdLetrasPalavra;

}

)

console.log(QtdLetras);
console.log(palavras);