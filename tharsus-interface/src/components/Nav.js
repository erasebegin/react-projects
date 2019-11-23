import React from "react";
import NavButtons from "./NavButtons";
import DatePickerComponent from "./DatePickerComponent";
import Logo from "../tharsus_logo.png";
import "../styles/Nav.css";

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.passNav = this.passNav.bind(this);
    this.passUserDate = this.passUserDate.bind(this);
  }

  passNav(nav) {
    this.props.getNav(nav);
  }

  passUserDate(date) {
    this.props.getDate(date);
  }


  render() {
    return (
      <div className="nav-container">
        <img src={Logo} alt="Tharsus logo" />
        <NavButtons passNav={this.passNav} />
        <DatePickerComponent passDate={this.passUserDate}/>
      </div>
    );
  }
}

export default Nav;
