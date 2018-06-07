import React, { Component } from "react";

class Toolbar extends Component {
  citiesArray() {
    return this.props.cityNames.map(cityName => {
      return (
        <button key={cityName} type="button" className="btn btn-secondary">
          {cityName}
        </button>
      );
    });
  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-light bg-light">
          <a className="navbar-brand" href="#">
            5 O'Clock Somewhere
          </a>
        </nav>
        <div className="container">
          <div className="btn-group" role="group" aria-label="Basic example">
            {this.citiesArray()}
          </div>
        </div>
      </div>
    );
  }
}

export default Toolbar;
