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

  async componentDidMount() {
    const currentCity = this.props.currentCity;
    console.log("currentCity: ", currentCity);
    const response = await Geocode.fromAddress(currentCity);
    const latLng = response.results[0].geometry.location;
    this.setState({ coords: latLng });
  }

  render() {
    const CityMap = withGoogleMap(props => (
      <GoogleMap defaultCenter={this.state.coords} defaultZoom={13} />
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
