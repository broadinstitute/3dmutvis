import React, {Component} from 'react';
import AutoComplete from 'material-ui/AutoComplete';
import IconButton from 'material-ui/IconButton';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import FontIcon from 'material-ui/FontIcon';

import {fullBlack} from 'material-ui/styles/colors';
//import SearchResultList from './SearchResultList';
import { Grid, Row, Col } from 'react-flexbox-grid';

const cardStyle = {
  marginRight: '10px',
  marginBottom: '10px',
  backgroundColor: '#F5F5F5'
}
const buttonRight = {
   width: '100%', 
   textAlign: 'right'
}
export default class SearchLayout extends Component {
  constructor(props){
      super(props)
      this.state = {searchResults : [], dataSource : [], filter: '', styleSearchBox: {paddingTop: '50%'}, searchOffset: 4}
  }
  handleUpdateInput = (value) => {
    this.setState({
      dataSource: [],
      filter: value
    });

    if (value!=''){
      this.setState({
        styleSearchBox:{paddingTop:'2%'},
        searchOffset: 0
      
    })}else{
      this.setState({
        styleSearchBox:{paddingTop:'50%'},
        searchOffset: 4
      
      })

    }
    if (value.length>2){
      fetch(`/genes/${value}`)
      .then(resp => resp.json())
      .then(resp => this.setState({searchResults:resp }))
    }else{
      this.setState({searchResults:[]})
    }

  };

  render() {
    return (
       <Grid fluid>
        <Row>
          <Col xs={4} xsOffset={this.state.searchOffset}>
            <div >
            <AutoComplete style={this.state.styleSearchBox}
                dataSource={this.state.dataSource}
                onUpdateInput={this.handleUpdateInput}
                floatingLabelText="enter symbol"
                fullWidth={true}
                value={this.state.filter}
            />
            </div>
          </Col>
        </Row>
        <Row>
            {this.state.searchResults.map(ele=>{ return(
              <Card style={cardStyle}>
                <CardHeader title={ele.symbol} />
                <CardText>{ele.name}</CardText>

                  <CardActions style={buttonRight}>
    <IconButton
      iconClassName="material-icons"
    >
      remove_red_eye
    </IconButton>                  </CardActions>
              </Card>)})}
        </Row>
      </Grid>
    );
  }
}
