function alterarCor(cor) {
    let backGround = document.getElementById('retangulo')

    if (cor === 'azul') {
        backGround.style.background = 'blue'
    } else if (cor === 'verde') {
        backGround.style.background = 'green'
    } else {
        backGround.style.background = 'red'
    }


}


function voltarPlanodeFundo() {
    let backGround = document.getElementById('retangulo')

    backGround.style.background = 'white'
}