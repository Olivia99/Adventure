import React, { Component } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

var pages = {
  start: {
    content:
      "Welcome, traveler! How would you like to get to your destination?",
    label1: "Train",
    label2: "Ship",
    page1: "onthetrain",
    page2: "ontheship"
  },
  onthetrain: {
    content:
      "Welcome aboard the choo-choo train! Please make your way to your seat. What's the number?",
    image: "train.png",
    input: {
      type: "select",
      values: ["", "12A", "12B", "12C", "11A", "11B", "11C"],
      saveKey: "seat"
    },
    label1: "Next",
    page1: "ontheseat"
  },
  ontheship: {
    content: "Welcome abord, sir! What is your destination?",
    input: {
      type: "text",
      saveKey: "destination"
    },
    label1: "Next",
    page1: "no"
  },

  ontheseat: {
    content: "You are seating on Seat",
    keyvalue: "seat",
    label1: "leave",
    page1: "onthetrain",
    label2: "sleep",
    page2: "fallasleep"
  },

  fallasleep: {
    content: "3 hours later",
    image:
      "data:image/jpeg;base64,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"
  }
};

class Page extends Component {
  render() {
    var pageData = pages[this.props.pageName];
    if (!pageData) {
      throw new Error("Eek! No page here!");
    }

    var goToPage = this.props.goToPage;
    var saveUserData = this.props.saveUserData;

    function goToPage1() {
      goToPage(pageData.page1);
    }
    function goToPage2() {
      goToPage(pageData.page2);
    }
    function handleChange(event) {
      saveUserData(pageData.input.saveKey, event.target.value);
    }

    var image = "";
    if (pageData.image) {
      image = (
        <div>
          <img className="main-page-image" src={pageData.image} />
        </div>
      );
    }
    var button1 = "";
    if (pageData.page1) {
      button1 = <button onClick={goToPage1}>{pageData.label1}</button>;
    }
    var button2 = "";
    if (pageData.page2) {
      button2 = <button onClick={goToPage2}>{pageData.label2}</button>;
    }
    var keyvalue = "";
    if (pageData.keyvalue) {
      keyvalue = this.props.userData[pageData.keyvalue];
    }

    var input = "";
    if (pageData.input) {
      var inputData = pageData.input;
      if (inputData.type == "select") {
        input = (
          <p>
            <select
              value={this.props.userData[inputData.saveKey]}
              onChange={handleChange}
            >
              {inputData.values.map(v => (
                <option value={v}>{v}</option>
              ))}
            </select>
          </p>
        );
      } else if (inputData.type == "text") {
        input = (
          <p>
            <input
              type="text"
              value={this.props.userData[inputData.saveKey]}
              onChange={handleChange}
            />
          </p>
        );
      }
    }

    return (
      <div>
        <p>
          {pageData.content}
          {keyvalue}
        </p>
        {input}
        {image}
        {button1}
        {button2}
      </div>
    );
  }
}

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      page: "start",
      userData: {}
    };

    this.goToPage = this.goToPage.bind(this);
    this.saveUserData = this.saveUserData.bind(this);
  }

  goToPage(pageName) {
    this.setState({
      page: pageName
    });
  }

  saveUserData(key, value) {
    function updateState(state) {
      var newState = { userData: { ...state.userData, [key]: value } };
      return newState;
    }
    this.setState(updateState);
  }

  render() {
    return (
      <div className="App">
        <Page
          pageName={this.state.page}
          goToPage={this.goToPage}
          userData={this.state.userData}
          saveUserData={this.saveUserData}
        />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
