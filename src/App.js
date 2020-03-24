import React, { Component } from 'react'
import './App.css';
import Board from './Components/Board';
import 'bootstrap/dist/css/bootstrap.css';

let id = 0;
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      square: [{ value: "", id }, { value: "", id }, { value: "", id }, { value: "", id }, { value: "", id }, { value: "", id }, { value: "", id }, { value: "", id }, { value: "", id }],
      nextPlayer: false
    }
  };

  setParentState = state => {
    this.setState(state);
  };
  render() {
    return (
      <div className="App" style={{ fontFamily: "RockoFLF" }}>
        <p style={{fontSize: "90px"}}>TIC TAC TOE</p>        <Board {...this.state} setParentState={this.setParentState} />
      </div>
    );
  }
}

