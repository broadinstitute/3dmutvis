import React, { Component } from 'react';
import Paper from 'material-ui/Paper'

const sectionStyle = {
    marginLeft: 40,
    marginRight: 10,
    marginTop: 100,
    borderWidth:1,
    color: '#999'
}
const textStyle = {
	cursor :"pointer",
	fontFamily:"Courier"
}
const headerStyle = {
    background: '#eee',
    borderRadius: 2,

    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 2,
    paddingBottom: 2
}
const contentStyle = {
    borderRadius: 2,
    marginLeft:10,
    marginRight:10,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 2,
    paddingBottom: 2
}
class Section extends Component {

	render() {
		return (
            <Paper style={sectionStyle}>
                <div style={headerStyle}>
                    <h8>{this.props.title}</h8>
                </div>
                <div style={contentStyle}>
                    {this.props.children}
                </div>
            </Paper>
		);
	}
}
export default Section



