import React from 'react';
import ReactDOM from 'react-dom';
import DevTools from 'mobx-react-devtools'
import {Provider} from 'mobx-react'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {cyan500, darkBlack,fullBlack, white,red400, grey300} from 'material-ui/styles/colors';


import App from './App';
import Login from './Login';
import ClumpsView from './ClumpsView';
import Search from './Search';


import ApplicationStore from './ApplicationStore';


import { Router, Route, IndexRoute, hashHistory } from 'react-router'

const applicationStore = new ApplicationStore();


const mountNode = document.getElementById('root');

const muiTheme = getMuiTheme({
  fontFamily: 'Roboto, sans-serif',
  palette: {
    primary1Color: red400,
    primary2Color: red400,
    primary3Color: red400,
    accent1Color: red400,
    accent2Color: red400,
    accent3Color: red400,
    textColor: darkBlack,
    alternateTextColor: white,
    canvasColor: white,
    borderColor: grey300,
    pickerHeaderColor: red400,
    shadowColor: fullBlack,
  },
  toolBar: {
    height: 50,
    color: 'black'
  },
});

ReactDOM.render(
        <div>
            <MuiThemeProvider muiTheme={muiTheme}>
                <Provider applicationStore={applicationStore}>
                    <Router history={hashHistory}>
                        <Route path='/' component={App}>
                            <Route path='/search' component={Search} />
                            <Route path='/clumpsview' component={ClumpsView} />
                            <Route path='/login' component={Login} />
                        </Route>
                    </Router>
                </Provider>
           </MuiThemeProvider>
        </div>
    , mountNode);