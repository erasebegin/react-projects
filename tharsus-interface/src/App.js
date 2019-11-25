import React from "react";
import Nav from "./components/Nav";
import DataDisplay from "./components/DataDisplay";
import "./styles/App.css";
import fastapi from './api/fastapi'
import moment from "moment";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      userDate: moment(Date()).format("YYYY-MM-DD"),
      apiData: {}, // this was set to a [] but it's data type is a actually an {}
      navState: "overview"
    };
    this.setNavState = this.setNavState.bind(this);
  }

  setNavState(nav) {
    // when triggering this from the UI it causes a state change, and a re-render
    const btnArr = ["overview", "movement", "distribution"];
    this.setState({ navState: btnArr[nav] });

    // this needs to be reset
    this.onDateChange(this.state.userDate)
  }

  onDateChange = async date => {
    const response = await fastapi.get(`/${date}`)
    console.log('onDateChange response.data', response.data)

    this.setState({ 
      apiData: response.data, 
      userDate: date ? date : this.state.userDate // you were not setting this but you will need it for when setNavState runs
    })
  }

  render() {
    console.log("new state is ",this.state.apiData) // you should see this
    return (
      <div className="App">
        <Nav getNav={this.setNavState} getDate={this.onDateChange} />
        <DataDisplay NavState={this.state.navState} apiData={this.state.apiData}/>
      </div>
    );
  }
}

export default App;