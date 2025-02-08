// uma turma tem 6 alunos
// cada aluno tem 3 notas
// todas essas informações devem ser armazenadas em um array
//  a primeira informação de cada aluno deve ser o nome, seguido pelas notas


let alunos = [
    ['joao', 10, 8, 9],
    ['maria', 9, 7, 8],
    ['pedro', 8, 6, 7],
    ['ana', 7, 5, 6],
    ['carlos', 6, 4, 5],
    ['joana', 5, 3, 4]
]

// você deverá calcular a média de cada aluno e adicionar como o 5º elemento do array
// ao final você deverá calcular a média geral da turma e exibir o resultado no console
let somaMedia = 0;
let totalAlunos = alunos.length;

console.log(alunos.length);


for (let i = 0; i < alunos.length; i++) {
    let aluno = alunos[i];
    let somaNotas = 0;

   
    for (let j = 1; j < aluno.length; j++) {
        somaNotas += aluno[j];
    }

    
    let mediaAluno = somaNotas / (aluno.length - 1);
    console.log(`Média de ${aluno[0]}: ${mediaAluno.toFixed(2)}`);

   
    somaMedia += mediaAluno;
}



let mediaGeral = somaMedia / alunos.length;





console.log(`Média geral da sala: ${mediaGeral.toFixed(2)}`);
