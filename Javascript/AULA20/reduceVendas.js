// para o array de vendas do CleitinhoEletro do ano de 2024, exiba o total vendido nos 12 meses. Utilize reduce para isso.

let vendas = [ 20000, 30000, 10000, 15000, 25000, 50000, 40000, 30000, 20000, 10000, 15000, 25000]

// total2024

// let novaVariável = arrayReferencia.reduce((acumulador, itemArray) => {
// aplicação da função de callback e retorno do valor calculado   
//})

let somaAnual = vendas.reduce((somaVendas, mesAtual) => {
    return somaVendas + mesAtual;
}, 10000)

console.log(`O valor das vendas de Cleitinho no ano de 2024 é de R$ ${somaAnual}`);
