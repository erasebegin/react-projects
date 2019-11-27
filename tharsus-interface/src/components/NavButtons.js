import React from "react";
import "../styles/NavButtons.css";

class NavButtons extends React.Component {
  constructor(props) {
    super(props);
    this.state = { active: 0 };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.handleClick(0);
  }

  handleClick(val) {
    this.props.passNav(val);
    this.setState({ active: val });
  }

  render() {
    return (
      <div className="button-container">
        <ul className="nav-buttons">
          <li
            className={`overview ${this.state.active === 0 ? "active" : ""}`}
            onClick={() => this.handleClick(0)}
          >
            Overview
          </li>
          <li
            className={`movement ${this.state.active === 1 ? "active" : ""}`}
            onClick={() => this.handleClick(1)}
          >
            Movement
          </li>
          <li
            className={`distribution ${
              this.state.active === 2 ? "active" : ""
            }`}
            onClick={() => this.handleClick(2)}
          >
            Distribution
          </li>
        </ul>
      </div>
    );
  }
}

export default NavButtons;
