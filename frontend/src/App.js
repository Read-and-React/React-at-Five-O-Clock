import React, { Component } from "react";
import bootstrap from "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import Toolbar from "./components/Toolbar";
import Map from "./components/Map";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cityNames: [],
      cities: {},
      selectedCityId: 0
    };
  }

  async componentDidMount() {
    const locUrl = `http://localhost:3001/location`;
    const response = await axios.get(locUrl);
    const locations = response.data;
    console.log("locations: ", locations);
    this.setState({ cities: locations });
    this.setState({ cityNames: locations.map(location => location.city) });
    // this.setState({ currentCity: this.state.cityNames[0] });
  }

  handleNewNote = () => {
    this.setState({ selectedCityId: cities.id });
  };
  
  render() {
    return (
      <div className="App">
        <Toolbar cities={this.state.cities} 
          onClickCity={this.handleClickCity}
        />
        <Map 
          cityNames={this.state.cityNames}
          selectedCityId={this.state.selectedCityId}
        />
      </div>
    );
  }
}

export default App;
