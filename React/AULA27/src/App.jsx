import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CardFilmes from './components/CardFilmes'
import CalcularImc from './components/CalcularImc'
import ListaProdutos from './components/ListaProdutos'

function App() {
  const [count, setCount] = useState(0)

  const produtos = [
    { id: 1, nome: "Notebook", preco: 2500 },
    { id: 2, nome: "Smartphone", preco: 1500 },
    { id: 3, nome: "Tablet", preco: 1200 },
  ];
  return (
    <>
      <CardFilmes titulo='Shrek para Sempre' imagem='https://br.web.img3.acsta.net/c_310_420/medias/nmedia/18/87/90/45/19962744.jpg' nota={4.1} duracao='1h 33min' data='9 de julho de 2010 No cinema' elenco='Mike Myers, Eddie Murphy, Cameron Diaz' sinopse='Shrek (Mike Myers) está entediado. Sua antiga vida de aventuras foi substituída pela de pacato pai de família. Casado com Fiona (Cameron Diaz) e pai de três filhos, Shrek sente falta da adrenalina e da liberdade que tinha no passado. Para recuperá-los, ele firma um pacto com Rumpelstiltiskin (Walt Dohrm). Imediatamente Shrek é levado a uma versão alternativa do Reino de Tão, Tão Distante, onde Fiona é uma temível ogro e ele não é mais reconhecido pelo Burro (Eddie Murphy) e o Gato de Botas (Antonio Bandera), seus melhores amigos.'></CardFilmes>

      <CalcularImc altura={1.72} peso={90} sexo='masculino' idade={37}></CalcularImc>


      <ListaProdutos lista={produtos}></ListaProdutos>
    </>
  )
}

export default App





