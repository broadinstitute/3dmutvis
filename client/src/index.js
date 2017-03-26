import React from 'react';
import ReactDOM from 'react-dom';
import DevTools from 'mobx-react-devtools'
import {Provider} from 'mobx-react'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {deepPurpleA200, darkBlack,fullBlack, white,cyan300, grey300} from 'material-ui/styles/colors';


import App from './App';
import Login from './views/Login';
//import Analyze from './views/Analyze';
import Search from './views/Search';

import ApplicationStore from './ApplicationStore';

import { Router, Route, IndexRoute, hashHistory } from 'react-router'

const applicationStore = new ApplicationStore();


const mountNode = document.getElementById('root');

const muiTheme = getMuiTheme({
  fontFamily: 'Roboto, sans-serif',
  palette: {
    primary1Color: cyan300,
    primary2Color: cyan300,
    primary3Color: cyan300,
    accent1Color: deepPurpleA200,
    accent2Color: deepPurpleA200,
    accent3Color: deepPurpleA200,
    textColor: darkBlack,
    alternateTextColor: white,
    canvasColor: white,
    borderColor: grey300,
    pickerHeaderColor: cyan300,
    shadowColor: fullBlack,
  },
  toolBar: {
    height: 50,
    backgroundColor: cyan300
  },
});

ReactDOM.render(
    <div>
        <MuiThemeProvider muiTheme={muiTheme}>
            <Provider applicationStore={applicationStore}>
                <Router history={hashHistory}>
                    <Route path='/' component={App}>
                        <Route path='/search' component={Search} />
                        <Route path='/login' component={Login} />
                    </Route>
                </Router>
            </Provider>
        </MuiThemeProvider>
    </div>
, mountNode);