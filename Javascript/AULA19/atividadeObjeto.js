// crie um objeto chamado conta bancaria. Esse objeto deverá ter as seguintes propriedade: 
// titular, 
// tipo (conta corrente ou poupanca),
// saldo(valor disponível na conta), 
// limite(valor disponível para emprestimos), 
// debito (booleano associado ao debito )

// mostre no console as informações da conta no seguinte formato:
// `A conta do ${titular} tem o saldo de ${saldo} e o limite de crédio para emprestimos de ${limite}`

// crie 3 métodos: sacar, depositar e consultarSaldo. 
// O metodo sacar recebe um valor como parâmetro e verifica se o saldo da conta bancária é suficiente para realizar o saque.
// O metodo depositar recebe um valor como parâmetro e adiciona o valor ao saldo da conta.
// O metodo consultarSaldo mostra o saldo atual da conta e se há debito.

// crie uma função chamada contratarEmprestimo, que irá receber o valor do emprestimo e caso o valor seja maior que o limite, irá exibir uma mensagem de erro. Caso contrario irá adicionar o valor ao saldo da conta, trocar o booleano de debito para true, exibir uma mensagem de sucesso, retirar o valor do limite e criar uma propriedade chamada emprestimo com o valor do emprestimo.

// 1º criar uma propriedade com o nome contratarEmprestimo
// contratarEmprestimo será uma função que:
// recebera o valor do emprestimo como parâmetro
// verificara se o valor do emprestimo é maior que o limite
// se o valor do emprestimo for menor que o limite
    // exibir uma mensagem de erro
// caso contrario, adicionar o valor ao saldo da conta(propriedade)
    // trocar o booleano de debito para true
    // cria a propriedade emprestimo com o valor do emprestimo
    // retirar o valor do limite

let contaBancaria = {
    titular: 'Fabricio do Nascimento da Silva',
    tipo: 'corrente',
    saldo: 15000,
    limite: 5000,
    debito: true,
    sacar: function(valor) {
        if (valor <= this.saldo) {
            contaBancaria.saldo -= valor;
            console.log(`Saque de ${valor} realizado com sucesso. Saldo atual: ${contaBancaria.saldo}`);
        } else {
            console.log('Saldo insuficiente para realizar o saque.');
            contaBancaria.debito = false;
        }
    },
    depositar: (valor) => {
        contaBancaria.saldo += valor;
        console.log(`O valor de R$ ${valor} foi adicionado seu saldo agora é ${contaBancaria.saldo}`);
        
    },
    /* consultarSaldo:  */

}


/* console.log(`A conta do ${contaBancaria.titular} tem o saldo de RS ${contaBancaria.saldo} e o limite de crédio para emprestimos de R$ ${contaBancaria.limite})`) */


/* console.log(contaBancaria.sacar(10000)); */
console.log(contaBancaria.depositar(20000));
console.log(contaBancaria.depositar(20000));
console.log(contaBancaria.saldo);

