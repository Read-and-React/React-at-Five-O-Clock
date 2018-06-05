import React, { Component } from "react";
import bootstrap from "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import Toolbar from "./components/Toolbar";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cityNames: []
    };
  }

  componentDidMount() {
    fetch(`http://localhost:3001/location`)
      .then(response => {
        return response.json();
      })
      .then(jsonResults => {
        this.setState({
          cityNames: jsonResults.map(location => location.city)
        });
      });
  }

  render() {
    return <Toolbar cityNames={this.state.cityNames} />;
  }
}

export default App;
