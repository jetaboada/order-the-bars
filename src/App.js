// import logo from './logo.svg';
import './App.css';
import Qmovs from './components/Qmovs'
import BarsContainer from './components/BarsContainer'
import { useState } from 'react';

let q = 5
let hmax = 200;
    let step = Math.ceil(hmax/q);
    let bars = [];
    for (let index = 0; index < q; index++) {
        bars.push({
          id: index, 
          height: (index+1)*step, 
          backgroundColor: 'red'
        });
    }
    function randomScoreOrder(a, b) {
      if (a.score === b.score) {
      const random = Math.random() * 10;
      if (random >= 5) {
          return 1;
      } else {
          return -1;
      }
      } else if (a.score > b.score) {
      return -1;
      } else if (a.score < b.score) {
      return 1;
      }
      return 0;
  }

bars.sort(randomScoreOrder);

function App() {
  const [barsArray, setBarsArray] = useState(bars)
  const colorOneBarSelected = (id) => {
    barsArray.forEach(element => {
          if (element.id === id) {
            element.backgroundColor= 'blue'
          }
        })
        console.log('barsArray: ',barsArray)
  }
  const updateBars = (id1, id2) => {
    // console.log(id1, id2)
    // console.log('barsArray: ',barsArray)
    let height1 = 0
    let height2 = 0
    barsArray.forEach(element => {
      
      if (element.id === id1) {
        // console.log('element.id: ',element.id)
        // console.log('id1: ',id1)
        // console.log('element.height: ',element.height)
        height1 = element.height
        // console.log('height1: ',height1)
      }
      if (element.id === id2) {
        height2 = element.height
      }
      
    });
    // console.log('height1: ',height1)
    // console.log('height2: ',height2)
    
    barsArray.forEach(element => {
      if (element.id == id1) {
        element.height = height2
      }
      if (element.id == id2) {
        element.height = height1
      }
    });
    // console.log('barsArray: ',barsArray)
    const _barsArray = [...barsArray]
    setBarsArray(_barsArray)
    barsArray.forEach(element => {
      element.backgroundColor= 'red'
      
    })
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>Order the bars</h1>
      </header>
      <main>
        <Qmovs q='5' />
        <BarsContainer bars={barsArray} updateBars={updateBars} colorOneBarSelected={colorOneBarSelected}/>
      </main>
    </div>
  );
}

export default App;
