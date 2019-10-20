import React, { Component } from 'react'

import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import * as action from '../actions/index';
class Signin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }
    }

    onChange = (e) => {
        console.log(e.target.name);
        
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    onLogin = () => {
        this.props.onLogin(this.state)
    }

    render() {
        let { isAuthenticate, errMessage } = this.props.data
        if (isAuthenticate) {
            return <Redirect to='/' />
        }
        else {
            return (
                <div className="container">
                    <div className="row">
                        <div className="col-6 ">
                            {errMessage ?
                                <div className="alert alert-danger" role="alert">
                                    Username or password wrong
              	            </div> : ''}
                            <form>
                                <div class="form-group">
                                    <label for="exampleInputEmail1">User name</label>
                                    <input type="text"
                                        onChange={this.onChange}
                                        name="username"
                                        value={this.state.username}
                                        class="form-control" placeholder="Enter user name" />

                                </div>
                                <div class="form-group">
                                    <label for="exampleInputPassword1">Password</label>
                                    <input type="password"
                                        value={this.state.password}
                                        onChange={this.onChange}
                                        name="password"
                                        class="form-control" placeholder="Password" />
                                </div>
                                <button type="button" class="btn btn-primary" onClick={this.onLogin}>Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            )
        }
    }
}
const mapStateToProps = (state) => {
    return {
        data: state.data
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        onLogin: (data) => {
            dispatch(action.login(data))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Signin);
