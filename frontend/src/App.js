import React, { Component } from "react";
import axios from "axios";
import "./App.css";

class App extends Component {
  state = {
    locations: [],
    cities: ""
  };
  componentDidMount() {
    axios.get(`http://localhost:3001/location`).then(res => {
      const locations = res.data;
      const cities = locations.map(c => c.city);
      this.setState({ locations });
      this.setState({ cities });
      console.log(this.state.locations);
      console.log(this.state.cities);
    });
  }
  render() {
    return (
      <div className="App">
        <h1>{this.state.cities}</h1>
      </div>
    );
  }
}

export default App;
