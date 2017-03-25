import React, { Component } from 'react';
import {scaleLinear} from 'd3-scale';

import uuid from 'uuid';

class DomainViewer extends Component {
  constructor(props){
		super(props)
    this.sequence = "MAALSGGGGGGAEPGQALFNGDMEPEAGAGAGAAASSAADPAIPEEVWNIKQMIKLTQEHIEALLDKFGGEHNPPSIYLEAYEEYTSKLDALQQREQQLLESLGNGTDFSVSSSASMDTVTSSSSSSLSVLPSSLSVFQNPTDVARSNPKSPQKPIVRVFLPNKQRTVVPARCGVTVRDSLKKALMMRGLIPECCAVYRIQDGEKKPIGWDTDISWLTGEELHVEVLENVPLTTHNFVRKTFFTLAFCDFCRKLLFQGFRCQTCGYKFHQRCSTEVPLMCVNYDQLDLLFVSKFFEHHPIPQEEASLAETALTSGSSPSAPASDSIGPQILTSPSPSKSIPIPQPFRPADEDHRNQFGQRDRSSSAPNVHINTIEPVNIDDLIRDQGFRGDGGSTTGLSATPPASLPGSLTNVKALQKSPGPQRERKSSSSSEDRNRMKTLGRRDSSDDWEIPDGQITVGQRIGSGSFGTVYKGKWHGDVAVKMLNVTAPTPQQLQAFKNEVGVLRKTRHVNILLFMGYSTKPQLAIVTQWCEGSSLYHHLHIIETKFEMIKLIDIARQTAQGMDYLHAKSIIHRDLKSNNIFLHEDLTVKIGDFGLATVKSRWSGSHQFEQLSGSILWMAPEVIRMQDKNPYSFQSDVYAFGIVLYELMTGQLPYSNINNRDQIIFMVGRGYLSPDLSKVRSNCPKAMKRLMAECLKKKRDERPLFPQILASIELLARSLPKIHRSASEPSLNRAGFQTEDFSLYACASPKTPIQAGGYGAFPVH"
    this.domains = [{"id":9085,"u1":"P15056","source":"pfam","extid":"PF02196","sstart":156,"send":225,"pfamid":"PF02196","shortname":"RBD","longname":"Raf-like Ras-binding domain"},{"id":2693,"u1":"P15056","source":"pfam","extid":"PF00130","sstart":235,"send":282,"pfamid":"PF00130","shortname":"C1_1","longname":"Phorbol esters/diacylglycerol binding domain (C1 domain)"},{"id":10070,"u1":"P15056","source":"pfam","extid":"PF07714","sstart":457,"send":714,"pfamid":"PF07714","shortname":"Pkinase_Tyr","longname":"Protein tyrosine kinase"}];
    this.width = 1200;
    this.height = Math.max.apply(Math,this.nr_mutations);
    this.X = scaleLinear()
            .domain([0,this.sequence.length])
            .range([30,this.width])
  }
  componentDidMount(){
  }
  render() {
    const domains = this.domains.map((domain, index) => {return <g><rect x={this.X(domain.sstart)} y="15" width={this.X(domain.send) - this.X(domain.sstart)} height="20"/><text x={this.X(domain.sstart)+5} y="28" textAnchor="start" fill="white" fontSize={10}>{domain.shortname}</text></g>})
  	return(
  			<svg ref='domains' width="100%" height="50">
				<g>
          <line x1={this.X(0)} x2={this.width} y1="25" y2="25" strokeWidth={1} stroke='#000' />

          {domains}
        </g>				
			</svg>
  		)
  }
}

export default DomainViewer;