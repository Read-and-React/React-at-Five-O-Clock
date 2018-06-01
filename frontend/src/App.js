import React, { Component } from "react";
import bootstrap from "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import Toolbar from "./components/Toolbar";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      locations: [],
      cities: ""
    };
  }

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
        
        <Toolbar 
          cities={this.state.cities}
        />
      </div>
    );
  }
}

export default App;

