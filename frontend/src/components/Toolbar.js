import React, { Component } from "react";

class Toolbar extends Component {
  
  render() {
    return (
      <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand" href="#">
          <img src="/assets/brand/bootstrap-solid.svg" width="30" height="30" className="d-inline-block align-top" alt="" />
          5 O'Clock Somewhere
        </a>
      </nav>
      
    );
  }

}


export default Toolbar;
