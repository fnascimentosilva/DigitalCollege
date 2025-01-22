let numero = 0;
let soma = 0;

while(numero <= 10){
    if(numero % 2 === 0){
        console.log(numero);
        soma = soma + numero;
       
        
    }
    
    numero++;
    
}

console.log(`O valor da soma dos numeros pares é ${soma}`);
