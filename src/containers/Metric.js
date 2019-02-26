import React, { Component } from "react";
import RadioBox from "../components/RadioBox";
import CheckBox from "../components/CheckBox";

const mockData = {
  audience: [
    {
      label:
        "Q4_PROGRAMS_Which of the following best describes your viewership of each show?",
      type: "choice",
      options: [
        { label: "Show 1", value: 1 },
        { label: "Show 2", value: 2 },
        { label: "Show 3", value: 3 },
        { label: "Show 4", value: 4 },
        { label: "Show 5", value: 5 },
        { label: "Show 6", value: 6 },
        { label: "Show 7", value: 7 },
        { label: "Show 8", value: 8 },
        { label: "Show 9", value: 9 },
        { label: "Show 10", value: 10 },
        { label: "Show 11", value: 11 },
        { label: "Show 12", value: 12 },
        { label: "Show 13", value: 13 },
        { label: "Show 14", value: 14 },
        { label: "Show 15", value: 15 }
      ],
      answers: [
        {
          label: "Have seen all or almost all episodes of this show",
          value: 1
        },
        { label: "Have seen many episodes of this show", value: 2 },
        { label: "Have seen just a few episodes at most", value: 3 },
        { label: "Have not watched this show at all", value: 4 }
      ]
    },
    {
      label: "Q2_Genres",
      type: "choice",
      options: [
        {
          label: "Sit-Coms",
          eg: "(e.g. The Big Bang Theory, Modern Family, Black-ish)",
          value: 1
        },
        {
          label: "Sketch Comedy",
          eg: "(e.g. Saturday Night Live, Inside Amy Schumer)",
          value: 2
        },
        {
          label: "Dramedies",
          eg: "(e.g. Baskets, Orange is the New Black, Girls, Shameless)",
          value: 3
        },
        {
          label: "Edgy Comedy",
          eg: "(e.g. Broad City, Fleabag, It’s Always Sunny In Philadelphia) ",
          value: 4
        },
        {
          label: "Adult Animated Series",
          eg: "(e.g. Family Guy, Rick and Morty, American Dad!)",
          value: 5
        },
        {
          label: "Late Night Talk Shows",
          eg:
            "(e.g. Conan, The Tonight Show with Jimmy Fallon, The Daily Show with Trevor Noah)",
          value: 6
        },
        {
          label: "News Satire",
          eg:
            "(e.g. Last Week Tonight with John Oliver, Real Time with Bill Maher)",
          value: 7
        },
        {
          label: "Comedy Anime",
          eg: "(e.g. Samurai Jack, Cowboy Bebop)",
          value: 8
        },
        {
          label: "Mockumentary",
          eg: "(e.g. Nathan for You, The Office, American Vandal)",
          value: 9
        },
        {
          label: "Satire",
          eg: "(e.g. South Park, Veep, Full Frontal with Samantha Bee)",
          value: 10
        },
        {
          label: "Prank Comedy",
          eg: "(e.g. The Eric Andre Show, Impractical Jokers) ",
          value: 11
        },
        {
          label: "Home Reality Shows",
          eg: "(e.g. Property Brothers, House Hunters)",
          value: 12
        },
        {
          label: "Self-Improvement/Makeover Reality",
          eg: "(e.g. The Biggest Loser, My 600 lb Life)",
          value: 13
        },
        {
          label: "Workplace Reality",
          eg: "(e.g. Ice Road Truckers, Pawn Stars, Bar Rescue)",
          value: 14
        },
        {
          label: "Talent Competition",
          eg: "(e.g. The Voice, America’s Got Talent)",
          value: 15
        },
        {
          label: "Physical Competition",
          eg: "(e.g. The Amazing Race, Survivor, American Ninja Warrior) ",
          value: 16
        },
        {
          label: "Dating Competition",
          eg: "(e.g. The Bachelor, Dating Naked)",
          value: 17
        },
        {
          label: "Lifestyle Reality",
          eg:
            "(e.g. Diner’s, Drive-ins, & Dives, Anthony Bourdain Parts Unknown)",
          value: 18
        },
        {
          label: "Food Competition",
          eg: "(e.g. Cake Boss, Master Chef, Top Chef, Hell’s Kitchen)",
          value: 19
        },
        {
          label: "Dark Reality",
          eg: "(e.g. Snapped, Making a Murderer)",
          value: 20
        },
        {
          label: "Game Shows",
          eg: "(e.g. Match Game, The Joker’s Wild, Hollywood Game Night)",
          value: 21
        },
        {
          label: "Talk Shows",
          eg: "(e.g. The View, The Ellen DeGeneres Show)",
          value: 22
        },
        {
          label: "Documentaries",
          eg: "(e.g. Little People Big World, Naked and Afraid, Gold Rush)",
          value: 23
        },
        {
          label: "News",
          eg: "(e.g. Good Morning America, Meet the Press, 60 Minutes)",
          value: 24
        },
        {
          label: "Normal People Reality",
          eg: "(e.g. Counting On, Teen Mom)",
          value: 25
        },
        {
          label: "Celebrity Lifestyle Reality",
          eg: "(e.g. Keeping Up with the Kardashians, The Real Housewives)",
          value: 26
        },
        {
          label: "Celebrity Competition",
          eg: "(e.g. Dancing with the Stars, Scared Famous, The Masked Singer)",
          value: 27
        },
        {
          label: "Main-Stream Dramas",
          eg: "(e.g. Empire, Scandal, This Is Us)",
          value: 28
        },
        {
          label: "Fantasy and Sci-Fi Dramas",
          eg: "(e.g. Westworld, Stranger Things, Game of Thrones)",
          value: 29
        },
        {
          label: "Horror/Dark Dramas",
          eg: "(e.g. The Walking Dead, American Horror Story)",
          value: 30
        },
        {
          label: "Period Dramas",
          eg: "(e.g. Downton Abby, The Crown, The Marvelous Mrs. Maisel) ",
          value: 31
        },
        {
          label: "Crime/Procedural Dramas",
          eg: "(e.g. Chicago Fire, Law & Order, Hawaii Five-0)",
          value: 32
        },
        {
          label: "Political Dramas",
          eg: "(e.g. Homeland, The Americans, American Crime)",
          value: 33
        },
        {
          label: "Limited Series Dramas",
          eg: "(e.g. Big Little Lies, The Night Of, The People vs OJ Simpson)",
          value: 34
        },
        {
          label: "Soap Opera Dramas",
          eg: "(e.g. Days of Our Lives, The Bold and the Beautiful)",
          value: 35
        },
        {
          label: "Superhero",
          eg: "(e.g. Luke Cage, Marvel’s Agents of S.H.I.E.L.D.)",
          value: 36
        },
        {
          label: "Drama Anime",
          eg: "(e.g. Death Note, Ghost in the Shell)",
          value: 37
        },
        {
          label: "Supernatural Dramas",
          eg: "(e.g. Sense8, Penny Dreadful, Lucifer)",
          value: 38
        },
        {
          label: "Legal Dramas",
          eg: "(e.g. Suits, Law & Order: SVU, How to Get Away with Murder)",
          value: 39
        },
        {
          label: "Teen Dramas",
          eg: "(e.g. Pretty Little Liars, Riverdale, 13 Reasons Why)",
          value: 40
        },
        {
          label: "Romantic Dramas",
          eg: "(e.g. Grey’s Anatomy, Outlander, This is Us)",
          value: 41
        }
      ],
      answers: [
        {
          label: "Never watch, I do not nor have I ever watched this genre",
          value: 1
        },
        {
          label: "Seldom watch, I typically do not watch this genre",
          value: 2
        },
        {
          label:
            "Occasionally watch, I watch this genre about once or twice a month",
          value: 3
        },
        {
          label: "Regularly watch, I watch this genre once a week or more",
          value: 4
        }
      ]
    },
    {
      label: "Q3_Networks",
      type: "choice",
      options: [
        { label: "BET", value: 1 },
        { label: "BETher", value: 2 },
        { label: "CMT", value: 3 },
        { label: "Comedy Central", value: 4 },
        { label: "MTV", value: 5 },
        { label: "MTV2", value: 6 },
        { label: "Paramount Network", value: 7 },
        { label: "TV Land", value: 8 },
        { label: "VH1", value: 9 },
        { label: "Logo", value: 10 },
        { label: "Nickelodeon", value: 11 },
        { label: "Nick at Nite", value: 12 },
        { label: "A&E", value: 13 },
        { label: "Adult Swim", value: 14 },
        { label: "AMC", value: 15 },
        { label: "Animal Planet", value: 16 },
        { label: "BBC America", value: 17 },
        { label: "BBC World News", value: 18 },
        { label: "Boomerang", value: 19 },
        { label: "Bounce TV", value: 20 },
        { label: "Bravo", value: 21 },
        { label: "Cartoon Network", value: 22 },
        { label: "Cooking Channel", value: 23 },
        { label: "CNBC", value: 24 },
        { label: "CNN", value: 25 },
        { label: "Destination America", value: 26 },
        { label: "Discovery Channel", value: 27 },
        { label: "Disney Channel ", value: 28 },
        { label: "E!", value: 29 },
        { label: "ESPN", value: 30 },
        { label: "Esquire Network", value: 31 },
        { label: "Food Network", value: 32 },
        { label: "Fox News", value: 33 },
        { label: "Freeform", value: 34 },
        { label: "Fuse", value: 35 },
        { label: "FX", value: 36 },
        { label: "FXX", value: 37 },
        { label: "FYI", value: 38 },
        { label: "Game Show Network", value: 39 },
        { label: "Hallmark Channel", value: 40 },
        { label: "Headline News", value: 41 },
        { label: "HGTV", value: 42 },
        { label: "History Channel", value: 43 },
        { label: "Investigation Discovery", value: 44 },
        { label: "ION TV", value: 45 },
        { label: "Lifetime", value: 46 },
        { label: "MLB Network", value: 47 },
        { label: "MSNBC", value: 48 },
        { label: "National Geographic (NatGeo)", value: 49 },
        { label: "NBA Network", value: 50 },
        { label: "NFL Network", value: 51 },
        { label: "OWN", value: 52 },
        { label: "Oxygen", value: 53 },
        { label: "Pop", value: 54 },
        { label: "SundanceTV", value: 55 },
        { label: "Syfy", value: 56 },
        { label: "TBS", value: 57 },
        { label: "Telemundo", value: 58 },
        { label: "TLC", value: 59 },
        { label: "TNT", value: 60 },
        { label: "Travel Channel", value: 61 },
        { label: "TruTV", value: 62 },
        { label: "TV One", value: 63 },
        { label: "Univision", value: 64 },
        { label: "USA", value: 65 },
        { label: "Viceland", value: 66 },
        { label: "WE tv", value: 67 },
        { label: "ABC", value: 68 },
        { label: "CBS", value: 69 },
        { label: "FOX", value: 70 },
        { label: "NBC", value: 71 },
        { label: "The CW", value: 72 },
        { label: "PBS", value: 73 },
        { label: "HBO ", value: 74 },
        { label: "Cinemax", value: 75 },
        { label: "Showtime", value: 76 },
        { label: "Starz", value: 77 },
        { label: "Netflix", value: 78 },
        { label: "Amazon Prime", value: 79 },
        { label: "YouTube Premium", value: 80 },
        { label: "Hulu", value: 81 },
        { label: "Crackle", value: 82 },
        { label: "Pluto TV", value: 83 },
        { label: "Sling TV", value: 84 },
        { label: "DIRECTV Now", value: 85 },
        { label: "HBO Now", value: 86 },
        { label: "CBS All Access", value: 87 }
      ],
      answers: [
        {
          label:
            "Never watch, I do not nor have I ever watched this channel/used this service",
          value: 1
        },
        {
          label:
            "Seldom watch, I typically do not watch this channel/use this service",
          value: 2
        },
        {
          label:
            "Occasionally watch, I watch this channel/use this service about once or twice a month",
          value: 3
        },
        {
          label:
            "Regularly watch, I watch this channel/use this service once a week or more",
          value: 4
        }
      ]
    },
    {
      label: "Youtube Viewership",
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
        "Q8_BRAND ENGAGEMENT_Which of the following have you done in the past month or so?",
      type: "choice",
      options: [
        { label: "BET", value: 1 },
        { label: "CMT", value: 2 },
        { label: "Comedy Central", value: 3 },
        { label: "MTV", value: 4 },
        { label: "MTV2", value: 5 },
        { label: "Paramount Network", value: 6 },
        { label: "TV Land", value: 7 },
        { label: "VH1", value: 8 }
      ],
      answers: [
        {
          label: "Seen an advertisement for [BRAND] or one of its shows",
          value: 1
        },
        { label: "Followed [BRAND] on social media ", value: 2 },
        {
          label:
            "Shared a [BRAND]-related post via social media, email, text, etc. [KEEP WITH PREVIOUS]",
          value: 3
        },
        {
          label: "Talked about [BRAND] with family, friends, or coworkers",
          value: 4
        },
        { label: "Watched [BRAND] with other people", value: 5 },
        { label: "Used the [BRAND] app", value: 6 },
        { label: "Visited the [BRAND] website", value: 7 },
        {
          label: "Bought clothing or merchandise from or related to [BRAND]",
          value: 8
        },
        {
          label: "Attended an event sponsored by or related to [BRAND]",
          value: 9
        },
        {
          label:
            "Watched a live event, award show, or special program on [BRAND]",
          value: 10
        },
        { label: "None of the above [ANCHOR][EXCLUSIVE]", value: 11 }
      ]
    },
    {
      label: "Q10_PODCAST CONSUMPTION",
      type: "choice",
      answers: [
        { label: "Love & Hip Hop: The Tea", value: 1 },
        { label: "Younger: Uncovered", value: 2 },
        { label: "Happy Sad Confused", value: 3 },
        { label: "The Daily Show: Ears Edition", value: 4 },
        {
          label: "The Bonfire with Big Jay Oakerson and Dan Soder",
          value: 5
        },
        { label: "You Up with Nikki Glaser", value: 6 },
        { label: "The Jim Jefferies Show Podcast", value: 7 },
        { label: "Roast Battle", value: 8 },
        { label: "The Jeselnik & Rosenthal Vanity Project", value: 9 },
        { label: "Nickelodeon Animation Podcast", value: 10 }
      ]
    }
  ]
};

class Metric extends Component {
  state = {
    label: "",
    options: [],
    answers: []
  };

  handleRadioBox = e => {
    let name = e.target.name;
    let value = e.target.value;
    // when switch to another question, then clear options and answers
    this.setState({
      [name]: value,
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
    this.props.handleSave(this.state);
    this.setState({
      label: "",
      options: [],
      answers: []
    });
  };

  render() {
    const { label, options, answers } = this.state;
    const optionList = label
      ? mockData.audience
          .filter(item => item.label === label)[0]
          .hasOwnProperty("options")
        ? mockData.audience.filter(item => item.label === label)[0].options
        : []
      : [];
    const answerList = label
      ? mockData.audience.filter(item => item.label === label)[0].answers
      : [];

    return (
      <div>
        <h3>Audience</h3>
        {/* label */}
        <RadioBox
          name="label"
          list={mockData.audience}
          selectedItem={label}
          handleChange={this.handleRadioBox}
        />
        <br />
        {/* options */}
        <CheckBox
          name="options"
          list={optionList}
          selectedItems={options}
          handleChange={this.handleCheckBox}
        />
        <br />
        {/* answers */}
        <CheckBox
          name="answers"
          list={answerList}
          selectedItems={answers}
          handleChange={this.handleCheckBox}
        />
        <br />
        <button onClick={this.handleClick} disabled={!answers.length}>
          SAVE
        </button>
        {/* And or OR */}
        {/* <Select
          title="AND or OR"
          name="join"
          value={this.state.join}
          list={["OR", "AND"]}
          handleChange={this.handleInput}
          disabled={!this.state.metrics.length}
        />
        <br /> */}
        {/* Group Name */}
        {/* <Input
          title="Group Name"
          type="text"
          name="name"
          value={this.state.name}
          placeholder="Put the group name"
          handleChange={this.handleInput}
          disabled={!this.state.metrics.length}
        />
        <br />
        <button>CREATE GROUP</button> */}
      </div>
    );
  }
}

export default Metric;
