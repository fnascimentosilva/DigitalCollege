preco = 150.00;
corEtiqueta = "roxo".toLowerCase();

switch (corEtiqueta) {
    case "verde":
        console.log(`Seu desconto é de ${(preco * 0.1).toFixed(2)} R$`);
        break;

    case "amarelo":
        console.log(`Seu desconto é de ${(preco * 0.2).toFixed(2)} R$`);
        break;

    case "azul":
        console.log(`Seu desconto é de ${(preco * 0.3).toFixed(2)} R$`);
        break;

    case "vermelho":
        console.log(`Seu desconto é de ${(preco * 0.4).toFixed(2)} R$`);
        break;

    default:
        console.log(`Cor de etiqueta inválida, o valor do seu produto é ${preco}`);

}