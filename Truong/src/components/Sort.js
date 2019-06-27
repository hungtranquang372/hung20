import React, { Component } from 'react';

class Sort extends Component {
 
  
  
  onClick=(sortBy,sortValue)=>{
    this.props.onSort(sortBy,sortValue);
  }
  render() {
   
    return (
      <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
        <div className="btn-group">
          
          <button type="button"
           class="btn btn-danger"
           onClick={()=>this.onClick('name',1)}
           >Tăng</button>
          
          <button
          className="btn btn-primary dropdown-toggle"
           id="dropdownMenu"
          type="button"  
           data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="true"  
           >
            Sắp xếp<span className="fa fa-caret-square-o-down ml-5"></span>
          </button>
          <ul className="dropdown-menu"aria labelledby="dropdownMenu1">
            <li > 
            <a 
            role='button'
            className={(this.props.sortBy==='name'&& this.props.sortValue===1)?'sort_selected':''}
            >
              <span className ="fa-fa-sort-alpha-asc pr-5 ">
                Tên A-Z
              </span>
            </a>
            </li>
            <li>
            <a 
            role='button'
            className={(this.props.sortBy==='name'&& this.props.sortValue===-1)?'sort_selected':''}
             >
                  
              <span className ="fa-fa-sort-alpha-asc pr-5 ">
                Tên Z-A
              </span>
            </a>
            </li>
            <li role ="seperator className="divisor></li>
            <li >
            <a 
            role='button'
            className={(this.props.sortBy==='status'&& this.props.sortValue===1)?'sort_selected':''}
             >
              
                Trang Thai Kich Hoat
              
            </a>
            </li>
            <li >
              <a 
              role ="button"
              className={(this.props.sortBy==='status'&& this.props.sortValue===-1)?'sort_selected':''}
              >

                Trang Thai An 
                </a> 
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
export default Sort;
