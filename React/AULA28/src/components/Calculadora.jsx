import React, { useState } from 'react'
import './CalculadoraStyle.css'

function Calculadora() {

    const [resultado, setResultado] = useState('');

    const handleClick = (valor) => {
        if (valor === 'C') {
            setResultado(''); // Limpa a tela
        } else if (valor === '=') {
            try {
                setResultado(eval(resultado).toString()); // Calcula o resultado
            } catch (error) {
                setResultado('Erro');
            }
        } else {
            setResultado(resultado + valor); // Adiciona o valor ao resultado
        }
    };


    return (
        <div>
            <table >
                <tr >
                    <td colSpan="4" className="telaResult">
                        {resultado}
                    </td>
                </tr>
                <tr>
                    <td><button onClick={() => handleClick('%')}>%</button></td>
                    <td><button onClick={() => handleClick('C')}>C</button></td>
                    <td><button onClick={() => handleClick('CE')}>CE</button></td>
                    <td><button onClick={() => handleClick('/')}>/</button></td>

                </tr>
                <tr>
                    <td><button onClick={() => handleClick('7')}>7</button></td>
                    <td><button onClick={() => handleClick('8')}>8</button></td>
                    <td><button onClick={() => handleClick('9')}>9</button></td>
                    <td><button onClick={() => handleClick('*')}>X</button></td>

                </tr>
                <tr>
                    <td><button onClick={() => handleClick('4')}>4</button></td>
                    <td><button onClick={() => handleClick('5')}>5</button></td>
                    <td><button onClick={() => handleClick('6')}>6</button></td>
                    <td><button onClick={() => handleClick('-')}>-</button></td>

                </tr>
                <tr>
                    <td><button onClick={() => handleClick('1')}>1</button></td>
                    <td><button onClick={() => handleClick('2')}>2</button></td>
                    <td><button onClick={() => handleClick('3')}>3</button></td>
                    <td><button onClick={() => handleClick('+')}>+</button></td>

                </tr>
                <tr>
                    <td><button onClick={() => handleClick('.')}>.</button></td>
                    <td><button onClick={() => handleClick('0')}>0</button></td>
                    <td><button onClick={() => handleClick(',')}>,</button></td>
                    <td><button onClick={() => handleClick('=')}>=</button></td>

                </tr>
            </table>
        </div>
    )
}

export default Calculadora