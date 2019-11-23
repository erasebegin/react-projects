import React from "react";
import NavButtons from "./NavButtons";
import DatePicker from "./DatePicker";
import Logo from "../tharsus_logo.png";
import "../styles/Nav.css";

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = { navState: "" };
    this.passNavState = this.passNavState.bind(this);
  }

  passNavState(nav) {
    this.setState({ navState: nav });
    this.props.NavStateUpdate(this.state.navState);
  }


  render() {
    console.log("parent says "+this.state.navState)
    return (
      <div className="nav-container">
        <img src={Logo} alt="Tharsus logo" />
        <NavButtons getState={this.passNavState} />
        <DatePicker />
      </div>
    );
  }
}

export default Nav;
