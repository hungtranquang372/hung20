import React, { Component } from 'react';



class TaskItem extends Component {
    constructor(props) {
        super(props);
        this.state = ({
                name:'Hi',
                

        })
    }
    onDelete=()=>{
        this.props.onDelete(this.props.task.id)
    }
    onUpdate=()=>{
        this.props.onUpdate(this.props.task.id)
    }
    render() {
    var {task,index}= this.props
        return (
            
           
                <tr>

                    <th>{index}</th>
                    <td>{task.id}</td>
                    <td>{task.name}</td>
                    
                    <td>
                   <span className={task.status ? "label label-danger" : "label label-success"}>
                   {task.status?"Kich Hoat":"Ẩn"}</span>
                    </td>
                    <td>
                        
                        <button type="button"
                         className="btn btn-danger"
                         onClick={this.onUpdate}
                          >Sửa</button>
                        <button 
                        type="button" 
                        className="btn btn-primary"
                         onClick={this.onDelete}
                         >Xóa</button>
                        
                    </td>
                </tr>
           
             



        );
    }
}

export default TaskItem;
