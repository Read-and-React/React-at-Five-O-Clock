import React, { Component } from "react";
import { withGoogleMap, GoogleMap } from "react-google-maps";

class MapView extends Component {
  render() {
    const CityMap = withGoogleMap(props => (
      <GoogleMap defaultCenter={this.props.coords} defaultZoom={13} />
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
export default MapView;
