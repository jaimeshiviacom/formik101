import React, { Component } from "react";
import Metric from "./Metric";
import Select from "../components/Select";
import Input from "../components/Input";

class Audience extends Component {
  state = { name: "", join: "OR", metrics: [] };

  handleSave = metric => {
    this.setState(prevState => ({
      metrics: [...prevState.metrics, metric]
    }));
  };

  handleInput = e => {
    let name = e.target.name;
    let value = e.target.value;
    this.setState({
      [name]: value
    });
  };

  handleClick = () => {
    this.props.handleSave(this.state, "audienceGroups");
    this.setState({
      name: "",
      join: "",
      metrics: []
    });
  };

  render() {
    const { name, join, metrics } = this.state;
    return (
      <div>
        <Metric handleSave={this.handleSave} />
        {/* And or OR */}
        <Select
          title="AND or OR"
          name="join"
          value={join}
          list={["OR", "AND"]}
          handleChange={this.handleInput}
          disabled={!metrics.length}
        />
        <br />
        {/* Group Name */}
        <Input
          title="Group Name"
          type="text"
          name="name"
          value={name}
          placeholder="Put the group name"
          handleChange={this.handleInput}
          disabled={!metrics.length}
        />
        <br />
        <button onClick={this.handleClick} disabled={!metrics.length || !name}>
          CREATE GROUP
        </button>
      </div>
    );
  }
}

export default Audience;
