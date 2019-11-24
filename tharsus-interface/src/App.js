import React from "react";
import Nav from "./components/Nav";
import DataDisplay from "./components/DataDisplay";
import "./styles/App.css";
import fastapi from './api/fastapi'

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      userDate: "",
      apiData: [],
      navState: "overview"
    };
    this.setNavState = this.setNavState.bind(this);
  }

  setNavState(nav) {
    const btnArr = ["overview", "movement", "distribution"];
    this.setState({ navState: btnArr[nav] });
  }

  onDateChange = async date => {
    const response = await fastapi.get(`/${date}`)
    this.setState({apiData:response.data})
  }

  render() {
    console.log("new state is ",this.state.apiData.site_hours)
    return (
      <div className="App">
        <Nav getNav={this.setNavState} getDate={this.onDateChange} />
        <DataDisplay NavState={this.state.navState} passAPIData={this.state.apiData}/>
      </div>
    );
  }
}

export default App;
