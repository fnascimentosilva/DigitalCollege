/* let paragrafoDiv = document.getElementsByTagName('p');

paragrafoDiv[1].innerHTML = ' Olá mundo' */


let lista = document.getElementsByClassName('lista')



lista[0].classList.remove('vermelho')

lista[0].classList.add('azul')

// para o elemento de id listaDeTarefas, peça ao usuário que digite 5 tarefas. Adicone elas em um array e depois transforme cada um dos elementos do array em um item de lista <li> e adicione-o ao elemento pai de id listaDeTarefas

// criar um array vazio para receber as tarefas
// pedir ao usuario que digite uma tarefa e adicionar ao array ( repetir 5x )
// selecionar o elemento pai
// criar um elemento filho, adicionar texto adicionar o filho ao pai (repetir 5x)

let ol = document.getElementById('listaDeTarefas')

let tarefas = []

for (let i = 0; i < 5; i++) {
   
    tarefas[i] = document.createElement('li')
    tarefas[i].innerText = prompt(`Escreva a ${i} tarefa`)
    ol.appendChild(tarefas[i])

}









