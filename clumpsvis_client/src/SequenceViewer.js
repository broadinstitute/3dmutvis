import React, { Component } from 'react';
import Nucleotide from './Nucleotide'



class SequenceViewer extends Component {
	onNucleotideClick(){
		
	}
	render() {
		return (
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
			
		);
	}
}

export default SequenceViewer;

