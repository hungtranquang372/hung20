import React, { Component } from 'react'

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
    truyenprops(){
        this.props.truyenprops(this.state.name)
    }
    render() {
        return (
            <div>
                <div class="form-group">
                  <label for=""></label>
                  <input type="text"
                    class="form-control" name="name" value={this.state.name}
                    onChange={this.handleChange}
                    />
                  
                </div>
               <button className="button"onClick={this.truyenprops()} />
            </div>
        )
    }
}
