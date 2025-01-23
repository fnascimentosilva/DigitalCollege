let numero = 8;
let soma = 0;
let contador = 0;

for (let i = 0; i <= numero; i++) {
    console.log(i);

    soma = soma + i;
    contador++;

}

console.log(`O numero digitado pelo usuario é ${numero} a quantidade de numeros é ${contador} e a soma dos numeros é ${soma}`);
