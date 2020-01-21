import React, { Component } from 'react'
import Home from './components/Home'
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ''
    }
  }
  truyenprops = (name) => {
    console.log(name);
    this.setState({
      name: name
    })




  }
  render() {
    return (
      <div>
        <Home truyenprops={this.truyenprops} />
      </div>
    )
  }
}
