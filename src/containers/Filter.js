import React, { Component } from "react";
import RadioBox from "../components/RadioBox";
import CheckBox from "../components/CheckBox";
import AgeRange from "../components/AgeRange";

const filters = [
  {
    label: "Age",
    type: "range",
    range: [13, 49]
  },
  {
    label: "Gender",
    type: "choice",
    answers: [{ label: "Male", value: 1 }, { label: "Female", value: 2 }]
  },
  {
    label: "Ethnicity",
    type: "choice",
    answers: [
      { label: "Asian/Asian-American", value: 1 },
      { label: "Black/African-American", value: 2 },
      { label: "White/Caucasian ", value: 3 },
      { label: "Other [ANCHOR]", value: 4 }
    ]
  },
  {
    label:
      "Kids2 [SINGLE CHOICE] Do you have any children under 13 years old living in your household?",
    type: "choice",
    answers: [{ label: "Yes", value: 1 }, { label: "No", value: 2 }]
  }
];

class Filter extends Component {
  state = { label: "", type: "", options: [], answers: [] };

  handleRadioBox = e => {
    // Todo: fix the issue of qtype
    let { name, value, id } = e.target;
    // when switch to another question, then clear options and answers
    this.setState({
      [name]: value,
      type: id,
      options: [],
      answers: []
    });
  };

  handleCheckBox = e => {
    let name = e.target.name;
    let newSelection = parseInt(e.target.value);
    let newSelectionArray;
    if (this.state[name].includes(newSelection)) {
      newSelectionArray = this.state[name].filter(
        item => item !== newSelection
      );
    } else {
      newSelectionArray = [...this.state[name], newSelection];
    }
    this.setState({ [name]: newSelectionArray });
  };

  handleAgeRange = e => {
    let { name, value, id } = e.target;
    let newSelectionArray = this.state.answers;
    newSelectionArray[id] = value;
    this.setState({
      [name]: newSelectionArray
    });
  };

  handleClick = () => {
    this.props.handleSave(this.state, "filters");
    this.setState({
      label: "",
      type: "",
      options: [],
      answers: []
    });
  };

  render() {
    const { label, options, answers } = this.state;
    const optionList = label
      ? filters
          .filter(item => item.label === label)[0]
          .hasOwnProperty("options")
        ? filters.filter(item => item.label === label)[0].options
        : []
      : [];
    const answerList = label
      ? filters
          .filter(item => item.label === label)[0]
          .hasOwnProperty("answers")
        ? filters.filter(item => item.label === label)[0].answers
        : []
      : [];
    const rangeList = label
      ? filters.filter(item => item.label === label)[0].hasOwnProperty("range")
        ? filters.filter(item => item.label === label)[0].range
        : []
      : [];

    return (
      <div>
        <h3>Filter</h3>
        {/* label */}
        <RadioBox
          name="label"
          list={filters}
          selectedItem={label}
          handleChange={this.handleRadioBox}
        />
        {/* age range */}
        <AgeRange
          name="answers"
          list={rangeList}
          selectedRange={answers}
          titleList={["Min", "Max"]}
          handleChange={this.handleAgeRange}
        />
        {/* options */}
        <CheckBox
          name="options"
          list={optionList}
          selectedItems={options}
          handleChange={this.handleCheckBox}
        />
        {/* answers */}
        <CheckBox
          name="answers"
          list={answerList}
          selectedItems={answers}
          handleChange={this.handleCheckBox}
        />
        <button onClick={this.handleClick} disabled={!answers.length}>
          SAVE
        </button>
      </div>
    );
  }
}

export default Filter;
