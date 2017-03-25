import React, { Component } from 'react';
import AminoAcid from './AminoAcid'

let seqStyle = {
	width: "60%",
	marginLeft:"20%"
}

class SequenceViewer extends Component {
	onNucleotideClick(){
		
	}
	render() {
		return (
				<svg  width="100%" height="500">
				<g>
				{this.props.sequence.split('').map((nucleotide, index) =>
	 				<AminoAcid
	            		type={nucleotide}
	            		position={index}
			            key={index}
			            onClick={this.onNucleotideClick} 
			            />
			        )}
				</g>
			</svg>
		);
	}
}

export default SequenceViewer;

