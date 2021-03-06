import React, {Component} from 'react';
import ClumpsAppBar from './ClumpsAppBar';
import Login from './Login/Login';

class App extends Component {
    let currentLocation = this.props.location.pathname
    let renderappbar = null
    if (currentLocation!=='/' && currentLocation!=='/login'){
      renderappbar = <KurtAppBar />
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