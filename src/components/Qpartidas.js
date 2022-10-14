import React, { Component } from 'react'

export default class Qpartidas extends Component {
  render() {
    return (
      <div className="App"> 
        <h3>
            Cantidad de partidas {this.props.q  }
        </h3>
      </div>
    );
  }
}

