import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom'
import { FaHome } from 'react-icons/fa';
import { connect } from 'react-redux';

class Navbar extends Component {
  constructor(props) {
    super(props);
    const data = JSON.parse(localStorage.getItem("user"))
    if (data) {
      this.state = {
        username: data.username,
        isAuthenticate: data.isAuthenticate
      }
    }
    else {
      this.state = {
        username: '',
        isAuthenticate: false
      }
    }

  }


  componentDidUpdate() {
    if (this.state.isAuthenticate !== this.props.data.isAuthenticate) {
      const data = JSON.parse(localStorage.getItem("user"))
      this.setState({
        username: data.username,
        isAuthenticate: data.isAuthenticate
      })

    }


  }
  cancelItem = () => {
    localStorage.setItem('user', null)
    window.location = 'http://localhost:3000/signin' ;
  }
  signOut = () => {
    window.location = 'http://localhost:3000/signin' ;
  }
  render() {

    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand"><FaHome /></a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <Link to='/' className="nav-link font-weight-bold">Home <span className="sr-only"></span></Link>
              </li>
              <li className="nav-item">
                <Link to='/about' className="nav-link font-weight-bold">About</Link>
              </li>
              <li className="nav-item">
                <Link to='/feature' className="nav-link font-weight-bold">Feature</Link>
              </li>
              <li className="nav-item">
                <Link to='/estate' className="nav-link font-weight-bold">Estate</Link>
              </li>
              <li className="nav-item">
                <Link to='/register' className="nav-link font-weight-bold">Register</Link>
              </li>
              {/* <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Dropdown
        </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a className="dropdown-item" >Action</a>
                  <a className="dropdown-item" >Another action</a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item" >Something else here</a>
                </div>
              </li> */}
            </ul>
            <form className="form-inline my-2 my-lg-0">
              {this.state.isAuthenticate ? <p className="mr-2"> {this.state.username} </p> : <button className="btn btn-outline-success my-2 my-sm-0" type="submit" onClick={this.signOut}>Login/SignUp</button>}
              {this.state.isAuthenticate ? <button className="btn btn-outline-success my-2 my-sm-0" type="submit" onClick={this.cancelItem}>Log  out</button> : ''}
            </form>
          </div>
        </nav>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    data: state.data

  }
}
const mapDispatchToProps = (dispatch, props) => {
  return {

  }

}
export default connect(mapStateToProps, null)(Navbar)
