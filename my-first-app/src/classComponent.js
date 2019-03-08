import React,{Component} from 'react'
import Greet from './greet'

class classComponent extends Component {
  
  constructor(props){
    super(props)
    this.state = {
      text: "MY STATE"
    }

    setTimeout (()=> {
      this.setState({
        text: "Just Updated"
      })
    }, 2000)
  
  }
  
  render() {
    return (<Greet title={this.state.text}/>)

  }
}

export default classComponent;
