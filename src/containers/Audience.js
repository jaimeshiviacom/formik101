import React, { Component } from "react";
import Metric from "./Metric";
import Select from "../components/Select";
import Input from "../components/Input";
import MetricList from "../components/MetricList";

class Audience extends Component {
  state = {
    value: { name: "", join: "OR", metrics: [] },
    editedMetric: { label: "", type: "", options: [], answers: [] }
  };

  handleSave = metric => {
    this.setState(prevState => ({
      value: {
        ...prevState.value,
        metrics: [...prevState.value.metrics, metric]
      }
    }));
  };

  handleDelete = e => {
    e.preventDefault();
    let value = e.target.value;
    let newMetrics = this.state.value.metrics.filter(
      item => item.label !== value
    );
    this.setState(prevState => ({
      value: {
        ...prevState.value,
        metrics: newMetrics
      }
    }));
  };

  handleEdit = e => {
    e.preventDefault();
    let value = e.target.value;
    let editedMetric = this.state.value.metrics.filter(
      item => item.label === value
    )[0];
    this.setState({ editedMetric: editedMetric });
  };

  handleCheckBox = e => {
    let name = e.target.name;
    let newSelection = parseInt(e.target.value);
    let newSelectionArray;
    if (this.state.editedMetric[name].includes(newSelection)) {
      newSelectionArray = this.state.editedMetric[name].filter(
        item => item !== newSelection
      );
    } else {
      newSelectionArray = [...this.state.editedMetric[name], newSelection];
    }
    this.setState(prevState => ({
      editedMetric: {
        ...prevState.editedMetric,
        [name]: newSelectionArray
      }
    }));
  };

  handleEditSave = e => {
    e.preventDefault();
    //  update the corresponding metric
    let label = this.state.editedMetric.label;
    let metrics = this.state.value.metrics.filter(item => item.label !== label);
    let newMetrics = [...metrics, this.state.editedMetric];
    this.setState(prevState => ({
      value: {
        ...prevState.value,
        metrics: newMetrics
      }
    }));
    // clear the editedMetric
    this.setState({
      editedMetric: {}
    });
  };

  handleInput = e => {
    let { name, value } = e.target;
    this.setState(prevState => ({
      value: {
        ...prevState.value,
        [name]: value
      }
    }));
  };

  handleCreateGroup = () => {
    this.props.handleSave(this.state.value, "audienceGroups");
    this.setState({
      value: { name: "", join: "OR", metrics: [] },
      editedMetric: { label: "", type: "", options: [], answers: [] }
    });
  };

  render() {
    const { name, join, metrics } = this.state.value;
    const { editedMetric } = this.state;
    return (
      <div>
        <Metric handleSave={this.handleSave} />
        {/* selected Metric */}
        <MetricList
          list={metrics}
          editedMetric={editedMetric}
          handleDelete={this.handleDelete}
          handleEdit={this.handleEdit}
          handleCheckBox={this.handleCheckBox}
          handleEditSave={this.handleEditSave}
        />
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
        <button
          onClick={this.handleCreateGroup}
          disabled={!metrics.length || !name}
        >
          CREATE GROUP
        </button>
        <pre>{JSON.stringify(this.state, null, 2)}</pre>
      </div>
    );
  }
}

export default Audience;
