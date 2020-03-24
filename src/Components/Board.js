import React, { Component } from 'react'
import Square from './Square';
import Moves from './Moves';
import 'bootstrap/dist/css/bootstrap.css';

let moveOrder = 0;
let winStatus;
let status = "O goes first";
export default class Board extends Component {
    calculateWinner(squares) {
        // the lines array below is for every winning combination
        // i.e. there is a winner if there is the same letter (i.e 'X') in boxes 0, 1, and 2 (the first combination below)
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];
        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            // create a new array with the same values as each winning combo. i.e. when i = 0 the new array of [a, b, c] is [0, 1, 2]
            if (squares[a].value && squares[a].value === squares[b].value && squares[a].value === squares[c].value) {
                return squares[a].value;
            }
        }               

        return null;
    };

    onSquareClicked = index => {
        moveOrder += 1;
        console.log(index);
        console.log(moveOrder);
        if (!this.props.square[index].value) {
            if (winStatus !== null){alert("We had a winner! Please reset to play again")}
            else {
            let squareList = this.props.square.slice();
            squareList[index].value = this.props.nextPlayer ? "X" : "O";
            status = "Next player is " + (this.props.nextPlayer ? "O" : "X")
            squareList[index].id = moveOrder;
            console.log(squareList);
            this.props.setParentState({ square: squareList, nextPlayer: !this.props.nextPlayer })}
        }
        else { alert("You cannot overwrite") };
    };

    render() {        
        winStatus = this.calculateWinner(this.props.square);
        console.log(winStatus);
        if (winStatus !== null) {
            status = 'Winner is ' + winStatus;
          }
        return (<div>
            <h1>{status}</h1>
            <div className="row">
                <div className="col-md-4"></div>
                <div className="col-md-4"><div style={{ justifyContent: "center", display: "flex" }}>
                    <div style={{ border: "solid 6px black", padding: "3px" }}>
                        <div style={{ display: "flex" }}>
                            <Square value={this.props.square[0]} onClick={() => this.onSquareClicked(0)} />
                            <Square value={this.props.square[1]} onClick={() => this.onSquareClicked(1)} />
                            <Square value={this.props.square[2]} onClick={() => this.onSquareClicked(2)} />
                        </div>
                        <div style={{ display: "flex" }}>
                            <Square value={this.props.square[3]} onClick={() => this.onSquareClicked(3)} />
                            <Square value={this.props.square[4]} onClick={() => this.onSquareClicked(4)} />
                            <Square value={this.props.square[5]} onClick={() => this.onSquareClicked(5)} />
                        </div>
                        <div style={{ display: "flex" }}>
                            <Square value={this.props.square[6]} onClick={() => this.onSquareClicked(6)} />
                            <Square value={this.props.square[7]} onClick={() => this.onSquareClicked(7)} />
                            <Square value={this.props.square[8]} onClick={() => this.onSquareClicked(8)} />
                        </div>
                    </div>
                </div></div>
                {/* <div className="col-md-4"><Moves value={this.props.square} /></div> */}
            </div>

        </div>
        )
    }
}