import React, { Component } from 'react'
import {FaPenAlt,FaTrash} from 'react-icons/fa'


export default class Estate extends Component {
    constructor(props) {
        super(props)
        this.state = {
          elmTask: null,
          item: {
            id: '',
            username: '',
            password: ''
          }
    
        }
      }
    
      onDelete = (id) => {
        console.log(id);
        
        fetch('http://localhost:4000/users/' + id, {
          method: 'DELETE'
    
        }).then(res => res.json())
          .then(response => {
            console.log(response);
            if (response.delete === "successful") {
              this.getData();
            }
          })
          .catch(error => console.error('Error:', error));
      }
      getData = () => {
        fetch('http://localhost:4000/users').then(res => res.json())
          .then(response => {
            console.log(response);
            const elmTask = response.map((item, index) => {
              console.log("item",item);
              
              return <tr>
                <th scope="row">{index + 1}</th>
                <td>{item.username}</td>
                <td><button className="btn btn-primary" data-toggle="modal" data-target="#exampleModal" onClick={() => this.onClick(item)}><FaPenAlt /></button>
                  <button className="btn btn-danger" onClick={() => this.onDelete(item._id)}><FaTrash /></button>
                </td>
              </tr>
            })
            this.setState({
              elmTask
            })
          })
      }
      componentDidMount() {
        this.getData();
               
            
        }
    render() {
        return (
            <div>
               <table class="table ">
                   <thead class="thead-inverse">
                       <tr>
                           <th>index</th>
                           <th>name</th>
                           <th>action</th>
                       </tr>
                       </thead>
                       <tbody>
                           
                           {this.state.elmTask}
                       </tbody>
               </table>
              </div> 
        ) 
}
}