import React, { Component } from 'react';
import Lollipop from './Lollipop'
import {scaleLog} from 'd3-scale';
import {scaleLinear} from 'd3-scale';

import uuid from 'uuid';
import jquery from "jquery";

class LollipopChart extends Component {
    constructor(props){
        super(props)
        this.nr_mutations = [0,10,0,10,100,2,2,0,0,0,0,77,3,0,0,0,0,0,0,20,2,1,0,0,0,2]
        this.width = 1200;
        this.height = Math.max.apply(Math,this.nr_mutations);
        this.X = scaleLinear()
                .domain([0,this.nr_mutations.length])
                .range([30,this.width])
        this.Y = scaleLog()
                .domain([1, this.height])
                .range([0, -80]);
    }
    onMutationClick(index){
        console.log(index)
    }
	render() {
        let lollipops = this.nr_mutations.map(
                        (nr_mut, index) =>                      
                        {
                            if (nr_mut>0){
                            return <Lollipop
                                    key={uuid.v1()}
	            		            x={this.X(index)}
			                        height={this.Y(this.nr_mutations[index])}
			                        onClick={this.onMutationClick.bind(this,index)} 
			                        />;
                            }
                        }
			        )
		return (
            <svg ref='mutations' width="100%" height="110">
				<g>                    
                    <text fontSize={10} x={this.X(0)-5} y={102+this.Y(this.height)} textAnchor="end">{this.height}</text>
                    <text fontSize={10}  x={this.X(0)-5} y={100} textAnchor="end">0</text>
                    <line x1={this.X(0)} x2={this.width} y1="100" y2="100" strokeWidth={2} stroke='#000' />
                    <line x1={this.X(0)} x2={this.X(0)} y1="100" y2={102+this.Y(this.height)} strokeWidth={2} stroke='#000' />
                    {lollipops}
                </g>
			</svg>
		);
	}
}
export default LollipopChart