import React from "react";
import moment from "moment";
import axios from "axios";
import Nav from "./components/Nav";
import MovementDataDisplay from "./components/MovementDataDisplay";
import "./styles/App.css";
import 'materialize-css/dist/css/materialize.min.css';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      appDate: moment().format("1995-12-25", "YYYY-MM-DD"),
      apiData: "",
      navState: ""
    };
    this.getNavState = this.getNavState.bind(this);
  }

  getNavState(nav) {
    this.setState({ navState: nav });
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

  render() {
    console.log("grandparent says " + this.state.navState);
    return (
      <div className="App">
        <Nav NavStateUpdate={this.getNavState} />
        {this.state.navState === "movement" ? (
          <div className="chart-container">
            <MovementDataDisplay
              Data={[3.3176110809420893, 4.18238891905791]}
              Title="Site Hours"
            />
            <MovementDataDisplay
              Data={[3.9176110809420893, 4.18238891905791]}
              Title="Moving Hours"
            />
          </div>
        ) : (
          " "
        )}
      </div>
    );
  }
}

export default App;
