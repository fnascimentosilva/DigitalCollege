// uma casa lotérica tem 2 filas 
// a fila preferencial tem 3 vagas(PARA ATENDIMENTO)
// a fila normal tem 8 vagas(PARA ATENDIMENTO)
// serão atendidos os 8 primeiros da fila normal 
// e os 3 últimos da fila preferencial
// todos os atendidos devem ser adicionados a uma terceira fila 'filaAtendidos'
let filaNormal = ['Ana', 'Bia', 'Cleitinho', 'Davi', 'Eliana', 'Fernanda', 'Gustavo', 'Helena', 'Isabela', 'Joaquim', 'Maria', 'João']

let filaPreferencial = ['Joaquina', 'Antônio', 'Cristina', 'Domingos', 'Eduardo', 'Fernando', 'Gustavo', 'Helena', 'Isabela', 'Joaquim', 'Maria', 'João']

let filaAtendidos = []

for (let i = 0; i <= 7; i++) {
    filaAtendidos.push(filaNormal.shift())
}

for (let i = 0; i <= 2; i++) {
    
    filaAtendidos.push(filaPreferencial.pop())

}
console.log(filaNormal);

console.log(filaPreferencial);

console.log(filaAtendidos);



