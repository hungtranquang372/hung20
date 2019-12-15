import React, { Component } from 'react';

class Colorpicker extends Component {
  constructor(props) {

    super(props);
    this.state = {
      colors: ['red', 'green', 'blue', 'yellow']

    };
  }
  onReceiveColor=(color)=> {
    
    this.props.onReceiveColor(color);
  }
  showColor(color) {
    console.log(this.props.color);
    return {
       backgroundColor: color
       
    };
  }

  render() {
    var elmcolors = this.state.colors.map((color, index) => {
      return <span
        key={index}
        style={this.showColor(color)}
       className={ this.props.color===color?'active':''}
       onClick={()=>this.onReceiveColor(color)}
      ></span>
    });
    return (

      <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 ">

        <div className="panel panel-primary mt-50">
          <div className="panel-heading">
            <h3 className="panel-title">Color Picker</h3>
          </div>
          <div className="panel-body">
            {elmcolors}
            <hr />
          </div>
        </div>

      </div>

    );
  }
}
export default Colorpicker;
