import React, { Component } from "react";
import { googleTranslate } from "google-translate";

class Phrase extends Component {
  componentDidUpdate() {
    this.translatePhrase();
  }
  translatePhrase() {
    googleTranslate.translate("My name is Brandon", "es", translation => {
      console.log(translation.translatedText);
      return translation.translatedText;
      // =>  Mi nombre es Brandon
    });
  }

  render() {
    return <p>hello</p>;
  }
}
export default Phrase;
