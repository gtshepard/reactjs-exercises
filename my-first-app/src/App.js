import React, { Component } from 'react';
import Greet from './greet.js'
import Header from './header.js'
import HasChildren from './hasChildren'
import ClassComponent from './classComponent'



class App extends Component {
  render() {
    return (
	    <div>
        <Header />
        <ClassComponent />
	    </div>
    );
  }
}

export default App;
