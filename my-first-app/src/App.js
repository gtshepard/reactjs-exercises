import React, { Component } from 'react';
import Greet from './greet.js'
import Header from './header.js'
import HasChildren from './hasChildren'
class App extends Component {
  render() {
    return (
	    <div>
        <Header />
        <HasChildren>
          <Greet/> 
        </HasChildren>
	    </div>
    );
  }
}

export default App;
