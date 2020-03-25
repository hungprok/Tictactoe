import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';


export default class Moves extends Component {
    showPast = (item,index) => {
        console.log("current history",this.props.history);
        console.log("tiem",item,"indx",index);
        this.props.setParentState({square: item.square, nextPlayer: item.nextPlayer, history: this.props.history.filter((e,i)=> i<=index)})
        // you can not use setstate because set state is in app.js you are just using props 
        // in this case you have to pass the setParentState function from parent to here Oh okay, let me try
        // you didnt pas the history here 
        // you have to pass every state in app.js thats why i put that show past at the app.js since the first place
        //this.state.history.this.state.history. this is wrong there is no state
        // can i use thiss syntax {...this.state} no that is from app.js you are sending from board so there is no state
        // but you can do {...this.props} i think
    };

    render() {
        console.log(this.props.history);
        let html = this.props.history.map((item, index) => {
            return (<div style={{ display: "flex", width: "100px" }}>
                <div style={{ border: "1px solid black", width: "98px"}}>
                    <button onClick={() => this.showPast(item,index)}>Move #{index + 1}</button>

                    <div className="row" style={{ width: "112px", paddingLeft: "15px" }}>
                        <div style={{ width: "30px", height: "30px", margin: "1px", backgroundColor: "red" }}>
                            <p style={{ fontSize: "22px", margin: "0px", padding: "0", fontFamily: '"Varela Round", sans-serif', fontWeight: "bold" }}>{item.square[0]}</p>
                        </div>
                        <div style={{ width: "30px", height: "30px", margin: "1px", backgroundColor: "red" }}>
                            <p style={{ fontSize: "22px", margin: "0px", padding: "0", fontFamily: '"Varela Round", sans-serif', fontWeight: "bold" }}>{item.square[1]}</p>
                        </div>
                        <div style={{ width: "30px", height: "30px", margin: "1px", backgroundColor: "red" }}>
                            <p style={{ fontSize: "22px", margin: "0px", padding: "0", fontFamily: '"Varela Round", sans-serif', fontWeight: "bold" }}>{item.square[2]}</p>
                        </div>
                    </div>
                    <div className="row" style={{ width: "112px", paddingLeft: "15px" }}>
                        <div style={{ width: "30px", height: "30px", margin: "1px", backgroundColor: "red" }}>
                            <p style={{ fontSize: "22px", margin: "0px", padding: "0", fontFamily: '"Varela Round", sans-serif', fontWeight: "bold" }}>{item.square[3]}</p>
                        </div>
                        <div style={{ width: "30px", height: "30px", margin: "1px", backgroundColor: "red" }}>
                            <p style={{ fontSize: "22px", margin: "0px", padding: "0", fontFamily: '"Varela Round", sans-serif', fontWeight: "bold" }}>{item.square[4]}</p>
                        </div>
                        <div style={{ width: "30px", height: "30px", margin: "1px", backgroundColor: "red" }}>
                            <p style={{ fontSize: "22px", margin: "0px", padding: "0", fontFamily: '"Varela Round", sans-serif', fontWeight: "bold" }}>{item.square[5]}</p>
                        </div>
                    </div>
                    <div className="row" style={{ width: "112px", paddingLeft: "15px" }}>
                        <div style={{ width: "30px", height: "30px", margin: "1px", backgroundColor: "red" }}>
                            <p style={{ fontSize: "22px", margin: "0px", padding: "0", fontFamily: '"Varela Round", sans-serif', fontWeight: "bold" }}>{item.square[6]}</p>
                        </div>
                        <div style={{ width: "30px", height: "30px", margin: "1px", backgroundColor: "red" }}>
                            <p style={{ fontSize: "22px", margin: "0px", padding: "0", fontFamily: '"Varela Round", sans-serif', fontWeight: "bold" }}>{item.square[7]}</p>
                        </div>
                        <div style={{ width: "30px", height: "30px", margin: "1px", backgroundColor: "red" }}>
                            <p style={{ fontSize: "22px", margin: "0px", padding: "0", fontFamily: '"Varela Round", sans-serif', fontWeight: "bold" }}>{item.square[8]}</p>
                        </div>
                    </div>
                </div>
            </div>)
        })
        return (
            <div style={{ display: "flex" }}>
                {html}
            </div>

        )
    }
}
