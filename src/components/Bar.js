import React from 'react'
import '../App.css'

 function Bar(props) {

    const styles = {
        height:props.height+'px',
        backgroundColor:props.backgroundColor       
    }
 
    // console.log('cantMovs en Bar: ')
    return (
      <div 
        style={styles}
        className="bar"
        onClick= {() => props.clickOnBar(props.id)}
    >
        
    </div>
    );
  }

  export default Bar