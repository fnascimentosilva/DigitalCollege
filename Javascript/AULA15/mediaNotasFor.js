let qtdNotas = Number(prompt(`Digite a quantidade de médias: `));
let somaNotas = 0;
let nota = 0;

for(let i = 0; i < qtdNotas; i++){

    nota = Number(prompt(`Digite a ${i+1} nota: `))
    somaNotas = somaNotas + nota;
}

alert(`A média das notas é: ${(somaNotas/qtdNotas).toFixed(2)}`);
