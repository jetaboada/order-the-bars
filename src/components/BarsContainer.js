import React, { useState } from 'react'
import Bar from './Bar'

// let CantMovs = 0
function BarsContainer(props) {
  const [barsSelected, setbarsSelected] = useState([])
  
  function clickOnBar(id){
    const _bars = [...barsSelected]

    switch(barsSelected.length){
      case 0:
        _bars.push(id)
        console.log(_bars)
        setbarsSelected(_bars)
        props.colorOneBarSelected(id)
        break;
      case 1:
        props.updateBars(_bars[0], id)
        setbarsSelected([])
        break;
      default:
        break;
    }
  }
 
  return (
    <div>
      {/* {
        winner ? <h4>PARTIDA FINALIZADA</h4>
      } */}
      <div className = 'barscontainer'> 
      {
        props.bars.map((bar) =>
          <Bar
            height={bar.height} 
            id={bar.id} 
            key={bar.id} 
            clickOnBar={clickOnBar}
            backgroundColor={bar.backgroundColor}
          />
        )
      }
      </div>
    </div>
  )
}
export default BarsContainer
