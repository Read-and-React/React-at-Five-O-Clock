import React, { Component } from "react";
const googleTranslate = require("google-translate");

class Phrase extends Component {
  // Stop collapsing
  componentDidUpdate() {
    console.log(this.props.language);
  }
  render() {
    return <p />;
  }
}
export default Phrase;
