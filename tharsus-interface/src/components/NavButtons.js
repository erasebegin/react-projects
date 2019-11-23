import React from "react";
import "../styles/NavButtons.css";

class NavButtons extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(val) {
    this.props.passNav(val);
  }

  render() {
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
