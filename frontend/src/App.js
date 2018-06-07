import React, { Component } from "react";
import bootstrap from "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import Toolbar from "./components/Toolbar";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cityNames: [],
      currentCity: []
    };
  }

  async componentDidMount() {
    const locUrl = `http://localhost:3001/location`;
    const response = await axios.get(locUrl);
    const locations = response.data;
    console.log("locations: ", locations);
    this.setState({ cityNames: locations.map(location => location.city) });
    this.setState({ currentCity: this.state.cityNames[0] });
  }

  render() {
    return (
      <div className="App">
        <Toolbar cityNames={this.state.cityNames} />
      </div>
    );
  }
}

export default App;
