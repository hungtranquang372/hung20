import React, { Component } from 'react';
import Colorpicker from './components/Colorpicker';
import Sizesetting from './components/Sizesetting';
import Reset from './components/Reset';
import Result from './components/Result';
import './App.css';

class App extends Component {
  constructor(props){
  super(props);
    this.state=({
      color:'red',
      fontSize:12
    
    });
     this.onSettingDefault=this.onSettingDefault.bind(this);
  }
  onReceiveColor=(params)=>{
    console.log(params);
    this.setState({
      color:params
    })
   } 
                                                                                                                                                    
     //8<= size<=36
    // console.log(value);
    
        // this.setState({
        //  fontSize: (this.state.fontSize+ value>=8 && this.state.fontSize+ value<=36)?this.state.fontSize+value:this.state.fontSize
        // })
    
   
   onSettingDefault=(value)=>{
     if(value){
     this.setState({
       color:'red',
       fontSize:12
     })
   }
  }
onChangeSize=(value)=>{
  if(this.state.fontSize+ value>=8 && this.state.fontSize+ value<=36){
    this.setState({
      fontSize:this.state.fontSize +value
    })
}
} 
onTruyen=(data)=>{
  this.setState({
    fontSize:data
  })
} 
  render() {
    return (

      <div className="container mt-50 ">

        <div className="row">
          <Colorpicker  color={this.state.color} onReceiveColor={this.onReceiveColor}/>

          <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            <Sizesetting 
            fontSize={this.state.fontSize}
            onChangeSize={this. onChangeSize}
            />
            <Reset onSettingDefault={this.onSettingDefault}
                  onTruyen={this.onTruyen}
            />




          </div>
          <Result  color={this.state.color} fontSize={this.state.fontSize}/>


        </div>

      </div>

    );
  }
}

export default App;
