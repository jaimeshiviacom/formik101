import React, { Component } from "react";
import ReactDOM from "react-dom";
import Audience from "./containers/Audience";

class App extends Component {
  state = {};
  render() {
    return (
      <div>
        <Audience />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
