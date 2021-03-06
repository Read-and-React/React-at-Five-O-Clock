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
      locationsData: [],
      currentCity: "",
      currentLatLng: {}
    };
  }

  async componentDidMount() {
    // Get locations
    const getLocations = `http://localhost:3001/location`;
    const response = await axios.get(getLocations);
    const locations = response.data;
    this.setState({ locationsData: locations });

    // Set currentCity
    this.setCurrentCity();
    this.geocodeCity(this.state.currentCity);
  }

  setCurrentCity(city) {
    if (!city) {
      this.setState({ currentCity: this.state.locationsData[0].city });
    } else {
      this.setState({ currentCity: city });
    }
  }

  // Geocode and set cityName
  async geocodeCity(cityName) {
    const response = await Geocode.fromAddress(this.state.currentCity);
    const latLng = response.results[0].geometry.location;
    this.setState({ currentLatLng: latLng });
  }

  // Select currentCity
  currentCityHandler = async event => {
    const newCity = await event.target;
    // console.log("newCity: ", newCity.id);
    this.setCurrentCity(newCity.id);
    // console.log("currentCity: ", this.state.currentCity);
    this.geocodeCity(this.state.currentCity);
  };

  render() {
    return (
      <div className="App">
        <Toolbar
          locationsData={this.state.locationsData}
          changeCity={this.currentCityHandler}
        />
        <MapView coords={this.state.currentLatLng} />
      </div>
    );
  }
}

export default App;
