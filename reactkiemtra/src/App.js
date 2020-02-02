import React, { Component } from 'react'
import Home from './components/Home'
import Error from './components/Error'
import Test from './components/Hung'
import Services from './components/Services'
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
        <Services></Services>
        <Error/>
        <Test/>
      </div>
    )
  }
}
