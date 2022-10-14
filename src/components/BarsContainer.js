import React, { Component } from 'react'
import Bar from './Bar'

export default class BasrContainer extends Component {
  render() {
    return (
      <div> 
        <h3>
            <Bar />
        </h3>
      </div>
    );
  }
}