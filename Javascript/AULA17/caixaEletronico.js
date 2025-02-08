/* Escreva um programa que receba como entrada o valor do saque realizado pelo cliente
de um banco e retorne quantas notas de cada valor serão necessárias para atender ao
saque com a menor quantidade de notas possível. Serão utilizadas notas de 100, 50, 20,
10, 5, 2 e 1 real. */

let valorSaque = 1351
let notas100 = 0
let notas50 = 0
let notas20 = 0
let notas10 = 0
let notas5 = 0
let notas2 = 0
let notas1 = 0



while (valorSaque >= 100) {
    valorSaque -= 100
    notas100++
}

while (valorSaque >= 50) {
    valorSaque -= 50
    notas50++
}
while (valorSaque >= 20) {
    valorSaque -= 20
    notas20++
}
while (valorSaque >= 10) {
    valorSaque -= 10
    notas10++
}
while (valorSaque >= 5) {
    valorSaque -= 5
    notas5++
}
while (valorSaque >= 2) {
    valorSaque -= 2
    notas2++
}
while (valorSaque >= 1) {
    valorSaque -= 1
    notas1++
}



console.log(notas100);
console.log(notas50);
console.log(notas20);
console.log(notas10);
console.log(notas5);
console.log(notas2);
console.log(notas1);
