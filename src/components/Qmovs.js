import React from 'react'

function Qmovs (props){

  const { movimientos } = props

  return (
    <div className="App"> 
      <h3>
          Cantidad de movimientos: {movimientos}
      </h3>
    </div>
  );

}

export default Qmovs

