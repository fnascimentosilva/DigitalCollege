/* Faça um programa que peça ao usuário para digitar 10 valores e some-os. */

let valor = 0;
let soma = 0;

for(let i = 0; i <= 3; i++){
valor = Number(prompt(`Insira o ${i+1} valor: `))

soma += valor;
}

console.log(`A soma dos valores é: ${soma}`);
