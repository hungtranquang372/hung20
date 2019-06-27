import React, { Component } from 'react';



class Form extends Component {
  constructor(props) {
    super(props);
    this.state = ({
      id:'',
     name:'',
     status: false
    })
  }
  onChange=(e)=>{
    console.log("e.target.name",e.target.name);
    console.log("e.target.value",e.target.value);
    this.setState({
      [e.target.name]:e.target.value
    })
  }
  onSubmit=(e)=>{
    e.preventDefault();
    this.props.onSubmit(this.state);
  }
  onClear=()=>{
    this.setState({
      name:'',
      status:false
    })
  }
  componentWillMount(){
    if(this.props.taskEditing){
      this.setState({
        id:this.props.taskEditing.id,
        name:this.props.taskEditing.name,
        status:this.props.taskEditing.status
      })
    }
  }
  componentWillReceiveProps(nextProps){
    if(nextProps && nextProps.task){
      this.setState({
        id:nextProps.taskEditing.id,
        name:nextProps.taskEditing.name,
        status:nextProps.taskEditing.status
      })
      console.log(this.state);
      
    }
  }
  render() {
    var {taskEditing}=this.props;
    return (
      <div>
        
        <form onSubmit={this.onSubmit}>
          
        
          <div className="form-group">
            <label >label</label>
            <input 
            type="text" 
            className="form-control"
            name="name" 
            value={this.state.name}
            onChange={this.onChange}
            />
          </div>
          <div className="form-group">
          <label >Trang Thái</label>
          <select name="status"  className="form-control"  onChange={this.onChange}>
            {/* <option value={false}>Tất Cả</option> */}
            <option value={false}>Ẩn</option>
            <option value={true}>Kích Hoạt</option>
          </select>
          </div>
        
          
        
          <button type="submit" className="btn btn-primary" >Luu</button>
          <button type="submit" className="btn btn-danger" onClick={this.onClear}>Xoa</button>
        </form>
        
        <div>





        </div>
       

        <div className="container mt-50 ">
          <div className="row">
            <div className="input-group">
              <div className="input-group">

                <div className="input-group">

                </div>

                
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Form;
