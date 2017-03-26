import React, {Component} from 'react';
import MainAppBar from './components/MainAppBar';
import Login from './views/Login';

class App extends Component {
  
  render() {
    
    const currentLocation = this.props.location.pathname
    console.log(currentLocation)
    let renderappbar = null
    if (currentLocation!=='/' && currentLocation!=='/login'){
      renderappbar = <MainAppBar />
    }
    return (
      <div>
        {renderappbar}
	    	<div>
	    		{this.props.children || <Login />}
	    	</div>
      </div>
    )
  }
}

export default App;