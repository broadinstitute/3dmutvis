import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import ClumpsView from './ClumpsView.js'


const App = () => (
  <MuiThemeProvider>
      <ClumpsView />
  </MuiThemeProvider>
);

export default App;