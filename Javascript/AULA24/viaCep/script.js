let cepInout = document.getElementById('cep')
let btn = document.querySelector('button')
let informacoes = document.getElementById('info')

function consultarCep() {
    let cep = cepInout.value
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then((response) => {
            return response.json()
        })
        .then((objeto) => {
            let info = document.createElement('p')
            info.innerHTML = `<p><strong>Logradouro:</strong> ${objeto.logradouro}</p>
<p><strong>Bairro:</strong> ${objeto.bairro}</p>
<p><strong>Cidade:</strong> ${objeto.localidade}</p>
<p><strong>Estado:</strong> ${objeto.estado}</p>
<p><strong>UF:</strong> ${objeto.uf}</p>`;
            informacoes.appendChild(info)


        }).catch((erro) => {
            console.error('Erro:', erro)
        })
}

btn.addEventListener('click', consultarCep)


