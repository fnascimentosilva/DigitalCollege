
import { useEffect, useState } from 'react'
import './App.css'
import ListaProdutos from './components/ListaProdutos';
import BuscarCep from './components/BuscarCep';

function App() {

  const [produtos, setProdutos] = useState([])

  function buscarProdutos() {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => {
        setProdutos(data)
      }).catch(erro => console.log(erro));
  }

  useEffect(() => {
    buscarProdutos()

  }, [])


  return (
    <>


<BuscarCep></BuscarCep>


     {/*  <ListaProdutos lista={produtos} /> */}

    </>
  )
}

export default App
