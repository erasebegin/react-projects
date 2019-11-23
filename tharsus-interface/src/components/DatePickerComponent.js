import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

class DatePickerComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: new Date()
    };
  }

  handleChange = date => {
    this.props.passDate(date);
    this.setState({startDate:date})
  };

  render() {
    return (
      <DatePicker
        selected={this.state.startDate}
        onChange={this.handleChange}
        withPortal
      />
    );
  }
}

export default DatePickerComponent;

// {defaultValue={moment().format("YYYY-MM-DD")}}
