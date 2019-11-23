import React from "react";
import moment from "moment";
import axios from "axios";
import Nav from "./components/Nav";
import DataDisplay from "./components/DataDisplay";
import "./styles/App.css";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      userDate: "poop",
      apiData: "",
      navState: "overview"
    };
    this.setNavState = this.setNavState.bind(this);
  }

  setNavState(nav) {
    const btnArr = ["overview", "movement", "distribution"];
    this.setState({ navState: btnArr[nav] });
  }

  setUserDate(date) {
    this.setState({ userDate: date });
  }

  componentDidMount() {
    const requestData = axios({
      url: "https://tharsus-interview-api-v1.azurewebsites.net/data/2019-10-19",
      method: "get",
      headers: {
        "content-type": "application/json"
      }
    })
      .then(response => {
        this.setState({ apiData: response });
      })
      .catch(err => {
        console.log(err);
      });
  }

  componentDidUpdate() {
    console.log("grandparent says " + this.state.navState + "\n" + this.state.userDate);
  }

  render() {
    return (
      <div className="App">
        <Nav getNav={this.setNavState} getDate={this.setUserDate} />
        <DataDisplay NavState={this.state.navState} />
      </div>
    );
  }
}

export default App;
