import React, { Component } from "react";
import { withGoogleMap, GoogleMap } from "react-google-maps";

class MapView extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    if (this.props.coords === nextProps.coords) {
      return false;
    } else {
      return true;
    }
  }

  render() {
    const CityMap = withGoogleMap(props => (
      <GoogleMap defaultCenter={this.props.coords} defaultZoom={13} />
    ));

    let map;
    if (this.props.coords !== undefined) {
      map = (
        <CityMap
          containerElement={<div style={{ height: `500px`, width: "100%" }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />
      );
    } else {
      map = <div style={{ height: this.props.height }} />;
    }
    return map;
  }
}
export default MapView;
