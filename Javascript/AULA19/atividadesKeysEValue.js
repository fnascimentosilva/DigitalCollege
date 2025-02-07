// para um produto :

let produto = {
    nome: 'Teclado',
    preco: 150,
    quantidade: 15,
    cor: 'preto'
}

// mostre todas as informações deste produto no console com o loop for especifico para objetos

for (let produtos in produto){
    console.log(produto[produtos]);
    
}