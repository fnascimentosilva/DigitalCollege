let numero = 0;
let soma = 0;
let cont = 0;

while (numero <= 10) {
    if (numero % 2 === 0 && numero != 0) {

        soma = soma + numero;
        console.log(numero);
        cont++;

    }
    
    numero++;

}

console.log(`A quantidade de numeros pares é ${cont} e o valor da soma dos numeros pares é ${soma}`);
