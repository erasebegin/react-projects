import React from "react";
import "../styles/NavButtons.css";

class NavButtons extends React.Component {
  constructor(props) {
    super(props);
    this.state = { active: "" };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(num) {
    const btnArr = ["overview", "movement", "distribution"];
    this.setState({ active: btnArr[num] });
    this.props.getState(this.state.active);
  }

  render() {
    console.log("child says " + this.state.active);
    return (
      <div className="button-container">
        <ul className="nav-buttons">
          <li className="overview" onClick={() => this.handleClick(0)}>
            Overview
          </li>
          <li className="movement" onClick={() => this.handleClick(1)}>
            Movement
          </li>
          <li className="distribution" onClick={() => this.handleClick(2)}>
            Distribution
          </li>
        </ul>
      </div>
    );
  }
}

export default NavButtons;
