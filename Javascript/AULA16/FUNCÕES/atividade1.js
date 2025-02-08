/* Crie uma funcão que receba um numero e mostre o quadrado dele no console */

/* function numeroQuadrado() {
    let numero = Number(prompt(`Insira um numero inteiro: `))

    let quadrado = Math.pow(numero, 2)

    alert(`O quadrado de ${numero} é ${quadrado}`)
}

numeroQuadrado() */

/* faca a funcao saudacao, ela recebera dois parametros Nome e turno, ela devera mostrar a saudacao de acordo com o turno mais o nome informado */

function saudacao(nome, turno) {
    if (turno === 'manha') {
        console.log(`Bom dia, ${nome}`);

    }else if(turno === 'tarde'){
        console.log(`Boa tarde, ${nome}`);

    }else if(turno === 'noite'){
        console.log(`Boa noite, ${nome}`);

    }else{
        console.log('Insira uma opcao válida');
        
    }

}

saudacao('Fabricio')

