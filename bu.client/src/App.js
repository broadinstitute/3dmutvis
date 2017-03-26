import React, {Component} from 'react';
import ClumpsAppBar from './ClumpsAppBar';
import Login from './Login';

class App extends Component {
  
  render() {
    
    const currentLocation = this.props.location.pathname
    console.log(currentLocation)
    let renderappbar = null
    if (currentLocation!=='/' && currentLocation!=='/login'){
      renderappbar = <ClumpsAppBar />
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