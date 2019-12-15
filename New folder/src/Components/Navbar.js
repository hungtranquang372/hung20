import React, { Component } from 'react'
import { FaHome } from 'react-icons/fa'
import {Link} from 'react-router-dom'
import Home from '../Page/Home'
import Rooms from '../Page/Rooms'
import Error from '../Page/Error'

export default class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-sm navbar-light bg-light">
                <a className="navbar-brand" ><FaHome/></a>

                <div className="collapse navbar-collapse" id="collapsibleNavId">
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li className="nav-item active" >
                            <Link to='/' className="nav-link" >Home </Link>
                        </li>
                        <li className="nav-item">
                            <Link to ='/rooms'className="nav-link" > Rooms</Link>
                        </li>
                        <li className="nav-item ">
                            <Link to='/error'className="nav-link dropdown-toggle"   >Error</Link>
                            
                        </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                        
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </div>
            </nav>
        )
    }
}
