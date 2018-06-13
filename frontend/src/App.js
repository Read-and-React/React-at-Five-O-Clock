import React, { Component } from "react";
import bootstrap from "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import Toolbar from "./components/Toolbar";
import MapView from "./components/MapView";
import Geocode from "react-geocode";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cityNames: [],
      currentCity: "",
      currentLatLng: {}
    };
  }

  async componentDidMount() {
    // Get locations
    const getLocations = `http://localhost:3001/location`;
    const response = await axios.get(getLocations);
    const locations = response.data;

    // Set cityNames
    this.setState({ cityNames: locations.map(location => location.city) });
    console.log("cityNames: ", this.state.cityNames);

    // Set currentCity
    this.setState({ currentCity: this.state.cityNames[0] });
    console.log("currentCity: ", this.state.currentCity);
    this.geocodeCity(this.state.currentCity);
  }

  // Geocode and set cityName
  async geocodeCity(cityName) {
    const response = await Geocode.fromAddress(this.state.currentCity);
    const latLng = response.results[0].geometry.location;
    this.setState({ currentLatLng: latLng });
  }

  render() {
    return (
      <div className="App">
        <Toolbar cityNames={this.state.cityNames} />
        <MapView coords={this.state.currentLatLng} />
      </div>
    );
  }
}

export default App;
