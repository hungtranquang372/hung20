import React, { Component } from 'react';
import TaskItem from './TaskItem';

class Table extends Component {
  constructor(props) {
    super(props);
    this.state = ({
      filterName:'',
      filterStatus:-1
    })
  }
  onChange=(e)=>{
    
    this.props.onFilter(
      e.target.name==="filterName"?e.target.value:this.state.filterName,
      e.target.name==="filterStatus"?e.target.value:this.state.filterStatus)
                                            
    this.setState({
      [e.target.name]:e.target.value
    })
  }
  render() {
    var {filterName,filterStatus}=this.state;
    var { tasks } = this.props;
    console.log(tasks);

    var elmTask = tasks.map((task, index) => {
      return <TaskItem
      
       
      
        key={index}
        index={index}
        task={task}
        onDelete={this.props.onDelete}
        onUpdate={this.props.onUpdate}
        
       
      />
    })
    return (

      <table className="table table-hover table-bordered">
        <thead>
          <tr>
            <th>STT</th>
            <th>ID</th>
            <th>Tên</th>
            <th>Trang Thai</th>
            <th>Hanh Động</th>
          </tr>
        </thead>
        <tbody>
          <tr>

            <th></th>
            <td>
            </td>
            <td>
            <input
              type="text"
              className="form-control"
              name="filterName"
              value={filterName}
              onChange={this.onChange}
                
              
            ></input>
            </td>
            <td>
              <select name="filterStatus"
               className="form-control"
               value={filterStatus}
               onChange={this.onChange}
               >
                <option value={-1}>Tất cả</option>
                <option value={0}>Ẩn</option>
                <option value={1}>Kich Hoạt</option>
              </select>
            </td>
           
          </tr>

          {elmTask}
        </tbody>
      </table>


    );
  }
}

export default Table;
