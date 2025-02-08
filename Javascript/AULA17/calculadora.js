/* 


function somar(a, b) {
    return a + b;
}
function subtrair(a, b) {
    return a - b;
}
function multiplicar(a, b) {
    return a * b;
}
function dividir(a, b) {
    if (b > 0) {
        return a / b;
    }else{
        console.log('Argumento inválido');
        
    }
}




console.log(somar(5, 3));
console.log(subtrair(5, 3));
console.log(multiplicar(5, 3));
console.log(dividir(5, 3)); */


function calculadora(numero1, numero2, operacao){
    /* let numero1 = Number(prompt('Insira o primeiro numero: '))
    let numero2 = Number(prompt('Insira o segundo numero: '))
    let operacao = Number(prompt('Escolha a operacao a ser executada: \n 1 - ADICAO 2 - SUBTRACAO 3 - MULTIPLICACAO 4 - DIVISAO ')) */

    if(operacao === 1){
        return numero1 + numero2;
    }else if(operacao === 2){
        return numero1 - numero2;
    }else if(operacao === 3){
        return numero1 * numero2;
    }else if(operacao === 4 && numero2 > 0){
        return numero1 / numero2;
    }else{
        console.log('operacao inválida');
        return null;
        
    }
}


/* let resultado = calculadora()
if (resultado !== null) {
    alert('Resultado: ' + resultado);
} */

/* alert(calculadora()) */


function calcularAlert(calculadora, a, b, c){
    console.log(calculadora(a, b, c));
    
}

calcularAlert(calculadora(2,3,3))