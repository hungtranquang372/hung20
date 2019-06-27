import React, { Component } from 'react';
import Form from './components/Form';
import Table from './components/Table';
import Control from './components/Control'
  import randomstring from 'randomstring';
import './App.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = ({
      tasks:[],
      taskEditing:null,
    filterName:'',
    filterStatus:'-1'
    })
  }
 onSubmit=(data)=>{
  console.log("data", data);
  
   var {tasks}= this.state;
     var task= {
      id: randomstring.generate({
        length:12,
        charset:'numeric'
      }),
      name:data.name,
      status: data.status
    }
    tasks.push(task);

this.setState({
  tasks:tasks
})
localStorage.setItem('tasks',JSON.stringify(tasks))
 }
 onFilter=(filterName,filterStatus)=>{
   console.log("filterNmae",filterName);
   
   filterStatus=parseInt(filterStatus)
       this.setState({
          filterName:filterName,
          filterStatus:filterStatus
       })
        
 }
 componentWillMount(){
   if(localStorage &&localStorage.getItem('tasks')){
     var tasks= JSON.parse(localStorage.getItem('tasks'))
     this.setState({
       tasks:tasks
     })
     
   }
 }
 onDelete=(id)=>{
   var {tasks}=this.state;
   var index= this. findIndex(id);
   if(index!==-1){
     tasks.splice(index,1);
   }
   this.setState({
     tasks:tasks
   });
   localStorage.setItem('tasks',JSON.stringify(tasks))
 }
 findIndex(id){
   var{tasks}=this.state;
   var result=-1;
   tasks.forEach((task,index)=>{
     if(task.id===id){
          result=index;
     }
     });
     return result;
   }
   onUpdate=(id)=>{
     console.log(id);
     
    var {tasks}=this.state;
    var index=this.findIndex(id);
    
      var taskEditing= tasks[index];
      this.setState({
        taskEditing:taskEditing
      })
    }
   onSort=(sortBy,sortValue)=>{
     this.setState({
       sortBy:sortBy,
       sortValue:sortValue
     })
   }
   
 
  render() {
    var {tasks,filterName,filterStatus,taskEditing,sortBy,sortValue}=this.state;
    console.log("filter",filterName);
    
      if(filterName){
        tasks=tasks.filter((task)=>{
          
          return task.name.toLowerCase().indexOf(filterName)!==-1
        }
          )
     
      console.log("task",tasks);
      
      var tasks= tasks.filter((task)=>{
        if(filterStatus===-1){
          return task
        }else{
          return task.status=(filterStatus===1?true:false);
        }
      }
      );
     }
    if(sortBy==='name'){
      tasks.sort((a,b)=>{
        if(a.name>b.name){
          return 1
        }
        else if(a.name<b.name){
          return -1
        }
        else{ 
          return 0
        }
      })
    }
    
    return (
      <div className="container mt-50 ">
        <div className="row">
          <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
            <Form
             onSubmit={this.onSubmit}
             taskEditing={taskEditing}
           
            />
          </div>
          <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
            <Control onSort={this.onSort}/>
            <Table 
             tasks={tasks}
             onFilter={this.onFilter}
             onDelete={this.onDelete}
             onUpdate={this.onUpdate}
            
            />

          </div> 
          
        
          
         </div>
          
        </div>
    
    );
  }
}

export default App;
