import React from 'react';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import redlogo from '../ninja_logo_red_kurt.png'
import {observer} from 'mobx-react';
import {inject} from 'mobx-react';
import { Link } from 'react-router'

const styles = {
  paperStyle : {
    height: 580,
    width: 400,
    margin: '5% auto',
    textAlign: 'center',
  },
  buttonStyle : {
    margin: 12,
  },
  logoStyle : {
    margin: "50px 50px 20px 50px" ,
    height: 250,
  },
  disclaimer : {
    fontSize : "10px",
    color: 'gray'
  }
}

@inject( ({loginStore}) => ({
    users: loginStore.users
}))
@observer
export default class LoginLayout extends React.Component {
    constructor(props) {
        super(props);
        this.loginClick = this.loginClick.bind(this)
        this.resetClick = this.resetClick.bind(this)
    }
    render() {
     return (
      <div className="Main">
        <Paper style={styles.paperStyle} zDepth={2}>
        <img style={styles.logoStyle} src={redlogo}/>
        <div>
        <TextField
          hintText="CWID"
          floatingLabelText="CWID"
          type="text"
          ref={(input) => { this.cwidInput = input; }}
        /><br />
          <TextField
            hintText="Password"
            floatingLabelText="Password"
            type="password"
            ref={(input) => { this.passwordInput = input; }}
          /><br />
          <RaisedButton label="Cancel" style={styles.buttonStyle} onClick={this.resetClick}/>
          <Link to="/overview">
            <RaisedButton label="Login" primary={true} style={styles.buttonStyle}/>
          </Link>
        </div>
      <p style={styles.disclaimer}>This product was developed in 6 hours...</p>
      </Paper>
      </div>
  );
  }
  loginClick() {
    let cwid = this.cwidInput.input.value
    let password = this.passwordInput.input.value
    console.log(this.props.users)
    for (var user of this.props.users) {
      if(user.cwid == cwid && user.password == password){
        alert("needs routing....")
      }
    }
  }
  resetClick() {
    this.cwidInput.input.value = ""
    this.passwordInput.input.value = ""
  }
}
