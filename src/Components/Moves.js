import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

let movesArrayhtml = [];

export default class Moves extends Component {

    render() {
        let movesArray = this.props.value;
        console.log(movesArray);
        if (movesArray.find((item) => item.value !== "")) {
            movesArrayhtml.push(movesArray);
            console.log(movesArrayhtml);
        };

        let html = movesArrayhtml.map((item) => {
            return (
                `<div className="row">
                    <div style={{ width: "30px", height: "30px", margin: "1px", backgroundColor: "red" }}>
                        <p style={{ fontSize: "22px", margin: "0px", padding: "0", fontFamily: '"Varela Round", sans-serif', fontWeight: "bold" }}>${item[0].value}</p>
                    </div>
                    <div style={{ width: "30px", height: "30px", margin: "1px", backgroundColor: "red" }}>
                        <p style={{ fontSize: "22px", margin: "0px", padding: "0", fontFamily: '"Varela Round", sans-serif', fontWeight: "bold" }}>${item[0].value}</p>
                    </div>
                    <div style={{ width: "30px", height: "30px", margin: "1px", backgroundColor: "red" }}>
                        <p style={{ fontSize: "22px", margin: "0px", padding: "0", fontFamily: '"Varela Round", sans-serif', fontWeight: "bold" }}>${item[0].value}</p>
                    </div>
                </div>
                <div className="row">
                    <div style={{ width: "30px", height: "30px", margin: "1px", backgroundColor: "red" }}>
                        <p style={{ fontSize: "22px", margin: "0px", padding: "0", fontFamily: '"Varela Round", sans-serif', fontWeight: "bold" }}>${item[0].value}</p>
                    </div>
                    <div style={{ width: "30px", height: "30px", margin: "1px", backgroundColor: "red" }}>
                        <p style={{ fontSize: "22px", margin: "0px", padding: "0", fontFamily: '"Varela Round", sans-serif', fontWeight: "bold" }}>${item[0].value}</p>
                    </div>
                    <div style={{ width: "30px", height: "30px", margin: "1px", backgroundColor: "red" }}>
                        <p style={{ fontSize: "22px", margin: "0px", padding: "0", fontFamily: '"Varela Round", sans-serif', fontWeight: "bold" }}>${item[0].value}</p>
                    </div>
                </div>
                <div className="row">
                    <div style={{ width: "30px", height: "30px", margin: "1px", backgroundColor: "red" }}>
                        <p style={{ fontSize: "22px", margin: "0px", padding: "0", fontFamily: '"Varela Round", sans-serif', fontWeight: "bold" }}>${item[0].value}</p>
                    </div>
                    <div style={{ width: "30px", height: "30px", margin: "1px", backgroundColor: "red" }}>
                        <p style={{ fontSize: "22px", margin: "0px", padding: "0", fontFamily: '"Varela Round", sans-serif', fontWeight: "bold" }}>${item[0].value}</p>
                    </div>
                    <div style={{ width: "30px", height: "30px", margin: "1px", backgroundColor: "red" }}>
                        <p style={{ fontSize: "22px", margin: "0px", padding: "0", fontFamily: '"Varela Round", sans-serif', fontWeight: "bold" }}>${item[0].value}</p>
                    </div>
                </div>`
            )
        })
        return (
            <div>
                {html}
            </div>

        )
    }
}
