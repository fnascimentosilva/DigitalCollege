let clientes = 5;
let faturamentoLojaA = 0;
let faturamentoLojaB = 54000;
let valorCompra = 0;

for(let i = 0; i < 5; i++){

    valorCompra = Number(prompt(`Qual o valor da compra do ${i+1}: `))
    faturamentoLojaA = faturamentoLojaA + valorCompra;
}

if(faturamentoLojaA > faturamentoLojaB){
    console.log(`O faturamento da Loja A foi superior em R$ ${faturamentoLojaA-faturamentoLojaB}`);
    
}else{
    console.log(`O faturamento da Loja A foi inferior ao da Loja B`);
    
}