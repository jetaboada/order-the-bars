// import logo from './logo.svg';
import './App.css';
import Qmovs from './components/Qmovs'
import BarsContainer from './components/BarsContainer'
import { useState } from 'react';
import RandomBars from './controllers/RandomBars';
import VerifyWinner from './controllers/VerifyWinner';
import ChangeHeight from './controllers/ChangeHeight';



function App() {

  const [barsArray, setBarsArray] = useState([])
  const [movimientos, setMovimientos] = useState(0)
  const [winner, setWinner] = useState(false)

  const colorOneBarSelected = (id) => {

    barsArray.forEach(element => {
          if (element.id === id) {
            element.backgroundColor= 'blue'
          }
        })
  }

  const winnerVerify = (barsArray) => {
    const won = VerifyWinner(barsArray)
    setWinner(won)
  }

  const nuevaPartida = () => {
    setBarsArray([])
    setWinner(false)
    setMovimientos(0)
  }

  const updateBars = (id1, id2) => {

    let _barsArray = ChangeHeight(barsArray, id1, id2)
    
    setBarsArray(_barsArray)

    setMovimientos(movimientos+1)
    winnerVerify(barsArray)
  }
  
  return (
    <div className="App">
      <header className="App-header">
        <h1>Order the bars</h1>
      </header>
      <main>
        <Qmovs movimientos={movimientos}/>
        {
          winner ? 
          <>
          <h4>FIN DE PARTIDA</h4>
          <button onClick={nuevaPartida}>Nueva Partida</button>
          </>
          : null
        }
        {
          barsArray.length > 0 ? 
          <BarsContainer bars={barsArray} updateBars={updateBars} colorOneBarSelected={colorOneBarSelected} /> 
          
          : <form onSubmit={(e)=>{
            e.preventDefault()
            const valor = e.target.cantidad.value
            const randomBars = RandomBars(valor)
            setBarsArray(randomBars)
          }}>
              <input name='cantidad' placeholder='Ingrese cantidad de barras'></input>
              <button>Empezar</button>
          </form>
        }
      </main>
    </div>
  );
}

export default App;
