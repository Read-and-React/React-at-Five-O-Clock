import React, { Component } from "react";
import axios from "axios";
import "./App.css";

class App extends Component {
  state = {
    locations: []
  };
  componentDidMount() {
    axios.get(`http://localhost:3001/location`).then(res => {
      const locations = res.data;
      this.setState({ locations });
      console.log(this.state.locations);
    });
  }
  render() {
    return (
      <div className="App">
        <h1>Hello World</h1>
      </div>
    );
  }
}

export default App;
