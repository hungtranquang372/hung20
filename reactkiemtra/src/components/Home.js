import React, { Component } from 'react'
import Services from './Services'
export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state={
           name:''
        }
        
    }
    handleChange=(e)=>{
        
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    truyenprops=()=>{
         this.props.truyenprops(this.state.name)
    }
    render() {
        return (
            <div>
                <div className="form-group">
                  
                  <input type="text"
                    className="form-control" name="name" value={this.state.name}
                    onChange={this.handleChange}
                    />
                  
                </div>
               <button className="button"onClick={this.truyenprops}>TEST </button>
              
            </div>
        )
    }
}
