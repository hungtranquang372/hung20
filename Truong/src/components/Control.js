import React, { Component } from 'react';

import Sort from './Sort'
class Control extends Component {
  render(){
  return (
    
    <div className="row">
      <div className="col-xs-9 col-sm-9 col-md-9 col-lg-9"></div>
      <Sort 
      onSort={this.props.onSort}
      />
    
  </div>
    
    
  );
}
}
export default Control;
