let numero = Number(prompt("Insira um numero inteiro: "));
let soma = 0;

while(numero > 0 && Number.isInteger(numero)){
    
    soma += numero;
    numero = Number(prompt("Insira um numero inteiro: "))
}

alert(`A soma dos numeros é: ${soma}`)