import React, { Component } from 'react';
import Greet from './greet.js'
import Header from './header.js'

class App extends Component {
  render() {
    return (
	    <div>
        <Header />
        <h1> Hello World</h1>
	      <Greet />
	    </div>
    );
  }
}

export default App;
