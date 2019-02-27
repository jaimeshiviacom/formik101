import React, { Component } from "react";
import Audience from "./containers/Audience";
import Profile from "./containers/Profile";
import Filter from "./containers/Filter";

class Main extends Component {
  state = { audienceGroups: [], filters: [], profiling: [] };

  handleSave = (item, name) => {
    this.setState(prevState => ({
      [name]: [...prevState[name], item]
    }));
  };

  handleSubmit = e => {
    alert(JSON.stringify(this.state, null, 2));
    e.preventDefault();
  };

  render() {
    return (
      <form>
        <Audience handleSave={this.handleSave} />
        {/* <Filter handleSave={this.handleSave} />
        <Profile handleSave={this.handleSave} /> */}
        <pre>{JSON.stringify(this.state, null, 2)}</pre>
      </form>
    );
  }
}

export default Main;
