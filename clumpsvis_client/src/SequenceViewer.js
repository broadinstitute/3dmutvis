import React, { Component } from 'react';
import Nucleotide from './Nucleotide'
import Paper from 'material-ui/Paper';

let seqStyle = {
	width: "60%",
	marginLeft:"20%"
}

class SequenceViewer extends Component {
	onNucleotideClick(){
		
	}
	render() {
		return (
			<Paper style={seqStyle}>
				<svg  width="100%" height="500">
				<g>
				{this.props.sequence.split('').map((nucleotide, index) =>
	 				<Nucleotide
	            		type={nucleotide}
	            		position={index}
			            key={index}
			            onClick={this.onNucleotideClick} 
			            />
			        )}
				</g>
			</svg>
			</Paper>
			
		);
	}
}

export default SequenceViewer;

