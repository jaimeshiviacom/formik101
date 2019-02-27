import React, { Component } from "react";
import RadioBox from "../components/RadioBox";
import CheckBox from "../components/CheckBox";

const profiles = [
  {
    label:
      "Q9_YOUTUBE VIEWERSHIP – [MULTISELECT] Which of the following Viacom YouTube channels have you viewed original content or shows on, in the past 6 months? ",
    type: "choice",
    answers: [
      { label: "BET YouTube channel", value: 1 },
      { label: "BET Her YouTube channel", value: 2 },
      { label: "Nickelodeon YouTube channel", value: 3 },
      { label: "Nick Splat YouTube channel", value: 4 },
      { label: "Nick Animation YouTube channel", value: 5 },
      { label: "MTV YouTube channel", value: 6 },
      { label: "Wild N Out YouTube channel", value: 7 },
      { label: "Jersey Shore YouTube channel", value: 8 },
      { label: "MTV News YouTube channel", value: 9 },
      { label: "TRL YouTube channel", value: 10 },
      { label: "MTV Decoded YouTube channel", value: 11 },
      { label: "Comedy Central YouTube channel", value: 12 },
      { label: "Comedy Central Stand-Up YouTube channel", value: 13 },
      { label: "The Daily Show YouTube channel", value: 14 },
      { label: "None of the above [ANCHOR]", value: 15 }
    ]
  },
  {
    label:
      "Q11_TECH ATTITUDES Below are some statements about how you watch, and feel, about TV in general.  Please indicate how much you agree or disagree with each statement.  Remember, there are no right or wrong answers!",
    type: "choice",
    answers: [
      { label: "I just love TV", value: 1 },
      {
        label:
          "I have to have a TV set in my home – just watching on a laptop or mobile device isn’t enough",
        value: 2
      },
      {
        label:
          "TV is like a utility, it’s one of the first things I set up in my house and I need to have it",
        value: 3
      },
      { label: "My favorite TV shows say a lot about who I am", value: 4 },
      {
        label:
          "I love TV today because there is so much variety, and I like watching a lot of different types of shows",
        value: 5
      },
      {
        label: "I feel totally overwhelmed with how much TV there is today",
        value: 6
      },
      {
        label:
          "I find it confusing that I can’t find all TV shows in one place, and need to go to cable and online subscription services now to get everything",
        value: 7
      },
      {
        label:
          "I love how much TV there is now, and if I could I would watch everything",
        value: 8
      },
      { label: "My friends consider me a TV expert ", value: 9 },
      {
        label:
          "My friends turn to me when looking for a new show to start watching",
        value: 10
      },
      {
        label: "I can’t stand sitting through commercials when I watch TV",
        value: 11
      },
      {
        label:
          "I prefer waiting to watch a show once the season is over, and binge it ‘all at once’ versus watching it live",
        value: 12
      },
      {
        label:
          "I love binging shows as it keeps me more engaged with the show, and I’m less likely to forget what’s happening",
        value: 13
      },
      {
        label:
          "I prefer to watch shows ‘live’ or relatively soon after initial airing, to stay in the know and have something to talk about with friends and co-workers",
        value: 14
      },
      {
        label:
          "I try not to watch too much TV because I feel like I’m wasting my time",
        value: 15
      },
      {
        label:
          "Trying to find out what TV show are where now is just too confusing",
        value: 16
      },
      {
        label:
          "It’s very unlikely that I will ever give up my cable subscription",
        value: 17
      },
      {
        label: "I like to keep up-to-date on all of the latest TV shows",
        value: 18
      },
      { label: "I can’t live without my SVOD TV services", value: 19 },
      { label: "I watch more SVOD than I do regular cable TV", value: 20 },
      {
        label: "SVOD has better quality shows now than regular cable TV",
        value: 21
      },
      {
        label: "I love that I can literally watch all the TV I want on SVOD",
        value: 22
      },
      {
        label: "I wouldn’t mind if all I watched were shows available on SVOD ",
        value: 23
      },
      { label: "Cable isn’t worth the money anymore", value: 24 },
      {
        label: "If I had to choose cable or SVOD, I’d choose SVOD",
        value: 25
      },
      { label: "I’m very tech-savvy", value: 26 },
      {
        label: "I like to keep up-to-date on all of the latest technology",
        value: 27
      },
      {
        label:
          "I’m usually the first one to buy the latest technology products",
        value: 28
      },
      {
        label:
          "My friends rely on my advice and recommendations on what technology products to buy",
        value: 29
      }
    ]
  },
  {
    label:
      "Q12_MEDIA SOURCES – [MULTISELECT] Which of the following sources got you interested in watching a TV show in the last 30 days?",
    type: "choice",
    answers: [
      { label: "TV Ad", value: 1 },
      {
        label: "A sneak peek of an entire episode of the show on TV",
        value: 2
      },
      { label: "Running into the show by chance on TV", value: 3 },
      { label: "Someone I know talking about it", value: 4 },
      { label: "Seeing it in the TV listings", value: 5 },
      { label: "A social networking site like Twitter or Facebook", value: 6 },
      {
        label: "A recommendation from a streaming service like Netflix or Hulu",
        value: 7
      },
      { label: "Seeing it on a video site like YouTube", value: 8 },
      { label: "A story about the show online", value: 9 },
      {
        label: "A sneak peek of an entire episode of the show online",
        value: 10
      },
      { label: "A story on a TV entertainment show", value: 11 },
      { label: "The ad on show’s official network or show site", value: 12 },
      {
        label: "An ad on a website other than the show’s or network’s website",
        value: 13
      },
      { label: "Official network or show app", value: 14 },
      { label: "A story in a magazine/newspaper", value: 15 },
      { label: "An ad on the radio", value: 16 },
      { label: "An outdoor ad, like a billboard or transit ad", value: 17 },
      { label: "An ad in a magazine/newspaper", value: 18 },
      { label: "A text/email from the show/TV network", value: 19 },
      { label: "A story on the radio", value: 20 },
      {
        label:
          "An ad that came up with search results on a search engine like Google",
        value: 21
      },
      { label: "None of the above (EXCLUSIVE – ANCHOR AT BOTTOM)", value: 22 }
    ]
  }
];

class Profile extends Component {
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

  handleClick = () => {
    this.props.handleSave(this.state, "profiling");
    this.setState({
      label: "",
      options: [],
      answers: []
    });
  };

  render() {
    const { label, options, answers } = this.state;
    const optionList = label
      ? profiles
          .filter(item => item.label === label)[0]
          .hasOwnProperty("options")
        ? profiles.filter(item => item.label === label)[0].options
        : []
      : [];
    const answerList = label
      ? profiles
          .filter(item => item.label === label)[0]
          .hasOwnProperty("answers")
        ? profiles.filter(item => item.label === label)[0].answers
        : []
      : [];

    return (
      <div>
        <h3>Profiling</h3>
        {/* label */}
        <RadioBox
          name="label"
          list={profiles}
          selectedItem={label}
          handleChange={this.handleRadioBox}
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

export default Profile;
