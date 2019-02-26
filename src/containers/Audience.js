import React, { Component } from "react";
import Metric from "./Metric";

class Audience extends Component {
  state = { name: "", join: "", metrics: [] };

  handleSave = metric => {
    this.setState(prevState => ({
      metrics: [...prevState.metrics, metric]
    }));
  };

  render() {
    return <Metric handleSave={this.handleSave} />;
  }
}

export default Audience;
