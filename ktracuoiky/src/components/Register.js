import React, { Component } from 'react'
import { connect } from 'react-redux';
import * as action from '../actions/index';
import { Link } from 'react-router-dom';
class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            isRegister: false,
            isValid: false,
            notify: ''
        }
    }

    onChange = (e) => {
        let isValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(e.target.value)
        this.setState({
            ...this.state,
            [e.target.name]: e.target.value,
            isValid: e.target.name === 'password' ? isValid : false
        })
    }
    onClear = () => {
        console.log("isRegister", this.props.isRegister)
        this.setState({
            ...this.state,
            username: '',
            password: '',
            isValid: false,

        })
    }
    onSubmit = () => {

        this.props.onRegister({
            username: this.state.username,
            password: this.state.password
        })
        this.onClear()

    }

    componentDidUpdate() {
        if (this.state.isRegister !== this.props.isRegister) {
            this.setState({
                ...this.state,
                isRegister: this.props.isRegister,
                notify: this.props.isRegister ? <div class="alert alert-success" role="alert">
                    dang ki thanh cong
                 </div> : <div class="alert alert-danger" role="alert">
                        dang ki khong thanh cong
                </div>
            })
        }

    }
    render() {
        const { isValid, notify } = this.state;
        
        const errMessage = 'Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character'

        return (
            <div class="col-md-4 col-md-offset-4" id="login">
                <section id="inner-wrapper" class="login">
                    <article>
                        {notify}
                        <form>
                            <div class="form-group">
                                <div class="input-group">
                                    <span class="input-group-addon"><i class="fa fa-user"> </i></span>
                                    <input
                                        onChange={this.onChange}
                                        name="username"
                                        value={this.state.username}
                                        type="text"
                                        class="form-control" placeholder="Name" />
                                </div>
                            </div>
                            <div class="form-group">
                                <div class="input-group">
                                    <span class="input-group-addon"><i class="fa fa-envelope"> </i></span>
                                    <input
                                        onChange={this.onChange}
                                        name="password"
                                        value={this.state.password}
                                        type="email"
                                        class="form-control" placeholder="password" />
                                </div>
                                {!isValid ? <div class="alert alert-primary" role="alert">
                                    {errMessage}
                                </div> : ''}
                            </div>
                            {isValid ?
                                <button type="button" onClick={this.onSubmit} class="btn btn-success btn-block">Submit</button> :
                                <button type="button" disabled class="btn btn-success btn-block disabled">Submit</button>
                            }
                            <Link to='/signin'>Signin</Link>
                        </form>

                    </article>
                </section>
            </div>

        )
    }
}

const mapStateToProps = (state) => {
    console.log(state);

    return {
        isRegister: state.data.isRegister

    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        onRegister: (data) => {
            dispatch(action.register(data))
        }

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Register)