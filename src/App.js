import React, { Component } from 'react'
import './App.css';
import Board from './Components/Board';
import 'bootstrap/dist/css/bootstrap.css';
import FacebookLogin from 'react-facebook-login';


let highScore = [];
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      square: ['', '', '', '', '', '', '', '', ''],
      nextPlayer: false,
      history: [],
      user: "Hung Nguyen", // this is for the user name without login feature
      score: 0,
      reset: false
    }
  };

  setParentState = state => {
    this.setState(state);
  };

  responseFacebook = (response) => {
    console.log(response);
    this.setState({ user: response.name });
  }

  postData = async () => {
    let data = new URLSearchParams();
    data.append("player", this.state.user);
    data.append("score", this.state.score);
    const url = `https://ftw-highscores.herokuapp.com/tictactoe-dev`;
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: data.toString(),
      json: true
    });
    console.log(response);
    this.getData();
  };

  getData = async () => {
    const url = `https://ftw-highscores.herokuapp.com/tictactoe-dev`;
    let result = await fetch(url);
    let data = await result.json();
    console.log(data);
    highScore = data.items;
    console.log(highScore)

  };

  timer() {
    this.myInterval = setInterval(() => {
      this.setState({
        score: this.state.score + 1
      })
    }, 1000)
  }

  reset() {
    this.setState({
      square: ['', '', '', '', '', '', '', '', ''],
      nextPlayer: false,
      history: [],
      user: "Hung Nguyen",
      score: 0,
      reset: true
    });
  };

  render() {
    this.getData();
    console.log(highScore)
    let html = highScore.map((item) => {
      return (
        <div>
          {item.player} won after {item.score} second(s)
        </div>
      )
    });
    console.log(html)

//     if (!this.state.user && !this.state.reset) {
//       return (<div className="App">
//         <FacebookLogin
//           appId="209935060103469"
//           autoLoad={true}
//           fields="name,email,picture"
//           callback={this.responseFacebook} />
//       </div>)
//     };

    return (
      <div className="App" style={{ fontFamily: "RockoFLF" }}>
        <p style={{ fontSize: "90px" }}>TIC TAC TOE</p>
        <button style={{ width: "100px", height: "50px" }} onClick={() => this.timer()}>START</button>
        <button style={{ width: "100px", height: "50px" }} onClick={() => this.reset()}>RESET</button>
        <p style={{ fontSize: "90px" }}>Time: {this.state.score}</p>
        <h1>Player name: {this.state.user}</h1>
        <Board {...this.state}
          setParentState={this.setParentState}
          postData={this.postData}
          score={this.state.score}
          clearInterval={this.myInterval}/>
        <div>{html}</div>
      </div>
    );
  }
}

