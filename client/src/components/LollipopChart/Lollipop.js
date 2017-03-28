import React, { Component } from 'react';

class Lollipop extends Component {
	render() {	
        console.log("the coords", this.props.x,this.props.height);	
		return (
            <g>
                <line x1={this.props.x} x2={this.props.x} y1={100} y2={100+this.props.height} strokeWidth="2" stroke="#000"/>            
                <circle cx={this.props.x} cy={100+this.props.height} r="5" stroke="black" strokeWidth="2" fill='#e3c'/>
            </g>
        );
	}
}
export default Lollipop