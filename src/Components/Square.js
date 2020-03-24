import React, { Component } from 'react';

export default class Square extends Component {
    render() {
        return (
            <div onClick={()=> this.props.onClick()} style={{width: "100px",height: "100px", margin:"3px", backgroundColor:"red"}}>
                <p style={{lineHeight: "100px",fontSize:"90px", margin: "0px", padding:"0px", fontWeight: "bold"}}>{this.props.value.value}</p>
            </div>
        )
    }
}