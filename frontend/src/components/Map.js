import React, { Component } from "react";
import { withGoogleMap, GoogleMap } from "react-google-maps";
import Geocode from "react-geocode";

class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
      coords: {}
    };
  }
  getLocation() {
    return Geocode.fromAddress("Chicago, IL").then(
      response => {
        const latLng = response.results[0].geometry.location;
        return latLng;
      },
      error => {
        console.error(error);
      }
    );
  }

  async setLocation() {
    const latLng = await this.getLocation().then(function(coords) {
      console.log("coords:", coords);
    });
    this.setState({ coords: latLng });
  }

  render() {
    if (this.state.coords) {
      console.log(this.state);
    }
    const CityMap = withGoogleMap(props => (
      <GoogleMap
        defaultCenter={{ lat: 41.1, lng: -73.954298 }}
        defaultZoom={13}
      />
    ));

    return (
      <div>
        <CityMap
          containerElement={<div style={{ height: `500px`, width: "100%" }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />
      </div>
    );
  }
}

export default Map;
