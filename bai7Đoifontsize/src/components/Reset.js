import React,{Component} from 'react';


class Reset extends Component  {
  constructor(props) {
    super(props);
    this.state={
      fonsize: 10
    }
  }
  
  onResetDefault=()=>{
    this.props.onSettingDefault(true)
  }
  onTruyen=()=>{
    this.props.onTruyen(this.state.fonsize);
  }
    render(){
  return (
    <div>
       <button type="button" className="btn btn-primary" onClick={this.onResetDefault}>Reset</button>
    
    <button type="button" className="btn btn-danger"onClick={this.onTruyen}>Truyen</button>
    
    </div>
   
  );
}
}
export default Reset;
