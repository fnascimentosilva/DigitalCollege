let contaBancaria = {
    titular: 'Artur Oliveira',
    tipoConta: 'conta corrente',
    saldo:  16000.00,
    limite:  4800.00,
    debito: true
};


console.log(`A conta do ${contaBancaria.titular} tem o saldo de ${contaBancaria.saldo} e o limite de crédio para emprestimos de ${contaBancaria.limite}`)

//--------------------------ATIVIDADE 2-----------------------------------
// crie 3 métodos: sacar, depositar e consultarSaldo. 

contaBancaria.sacar = (valor) => {
    //ver se tem saldo na conta
    // O metodo sacar recebe um valor como parâmetro e verifica se o saldo da conta bancária é suficiente para realizar o saque.
    if(contaBancaria.saldo >= valor){
        contaBancaria.saldo -= valor
        console.log(`Saque de R% ${valor} realizado com sucesso!`)
        
    }
    else{
        console.log('Saldo insufuciente para saque')
    }
}


// O metodo depositar recebe um valor como parâmetro e adiciona o valor ao saldo da conta.
contaBancaria.depositar = (valor) => {
    contaBancaria.saldo += valor
    console.log(`Depósito de R$ ${valor} realizado com sucesso!`)

}
      


// O metodo consultarSaldo mostra o saldo atual da conta e se há debito.
contaBancaria.consultarSaldo = () => {
    console.log(`O saldo atual da conta de ${contaBancaria.titular} é de R$ ${contaBancaria.saldo}`)
    // console.log(O débito da conta é R$ ${contaBancaria.debito});
    if(contaBancaria.debito){
         //true ou false
         console.log(`Conta com debito`);

    }
    else{
        console.log(`Conta sem debito`);
    }
}

contaBancaria.consultarSaldo()
contaBancaria.sacar(500)
contaBancaria.consultarSaldo()