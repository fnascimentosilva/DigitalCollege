let urlImagem = document.getElementById('containerImagem')
let botao = document.querySelector('button')



function mostrarGato(){

fetch('https://api.thecatapi.com/v1/images/search')
.then((response) => {
    return response.json()
})
.then((objeto) => {
    let img = document.createElement(`img`)
    img.src = objeto[0].url
    img.alt = 'imagem de um gato'
    urlImagem.appendChild(img)
    

    
})
.catch((erro) => {
    console.log('Erro: ', erro);
    
})}

/* tarefas[i] = document.createElement('li')
    tarefas[i].innerText = prompt(`Escreva a ${i} tarefa`)
    ol.appendChild(tarefas[i])
 */
  
  botao.addEventListener('click', mostrarGato)