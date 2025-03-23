import React from 'react'
import { useState } from 'react'

function ConversorMoeda() {

    let [nomeMoeda, setMoeda] = useState('')
    let [cotacao, setCotacao] = useState(0)
    let [valorReais, setReais] = useState(0)

    function converterMoeda() {
        let moeda = prompt('Escreva qual moeda que deseja comprar: ')
        let cotacaoDia = prompt('Qual a cotacao do dia: ')
        let valorConversao = prompt('Quanto deseja converter: ')


        setMoeda(moeda)
        setCotacao(cotacaoDia)
        setReais(valorConversao)


    }
    return (
        <div>
            <h1>Casa de Câmbio</h1>
            <h2>Quero comprar {nomeMoeda}</h2>
            <h2>O valor da cotacão hoje é de R$ {cotacao}</h2>
            <h2>Tenho R$ {valorReais} para converter</h2>
            <h2>Voce comprou $ {valorReais/cotacao}</h2>

            <button onClick={converterMoeda}>Converter moeda</button>
        </div>
    )
}

export default ConversorMoeda