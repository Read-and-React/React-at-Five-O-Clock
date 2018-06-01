import React, { Component } from "react";

class Toolbar extends Component {
  
  render() {

    return (
      <div>
        <nav className="navbar navbar-light bg-light">
          <a className="navbar-brand" href="#">
            <img src="/assets/brand/bootstrap-solid.svg" width="30" height="30" className="d-inline-block align-top" alt="" />
            5 O'Clock Somewhere
          </a>
        </nav>
        <div className="container">
          <div className="btn-group" role="group" aria-label="Basic example">
            <button type="button" className="btn btn-secondary">{this.props.cities[0]}</button>
            <button type="button" className="btn btn-secondary">{this.props.cities[1]}</button>
            <button type="button" className="btn btn-secondary">{this.props.cities[2]}</button>
          </div>
        </div>
      </div>
      
    );
  }

}


export default Toolbar;

