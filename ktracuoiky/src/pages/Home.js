import React, { Component } from 'react'


export default class Home extends Component {
  render() {
    return (
      <div>
        <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
          <ol className="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img className="d-block w-100" src="https://images.unsplash.com/photo-1542756171-71dfa54e897f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1064&q=80" alt="First slide" />
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src="https://images.unsplash.com/photo-1542756171-71dfa54e897f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1064&q=80" alt="Second slide" />
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src="https://images.unsplash.com/photo-1542756171-71dfa54e897f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1064&q=80" alt="Third slide" />
            </div>
          </div>
          <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
        
      </div>
    )
  }
}
