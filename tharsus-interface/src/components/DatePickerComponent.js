import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";
import "../styles/DatePicker.css"

class DatePickerComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: new Date()
    };
  }

  handleChange = date => {
    this.setState({startDate:date})
    date = moment(date).format("YYYY-MM-DD")
    this.props.passDate(date);
  };

  render() {
    return (
      <div className="date-picker-container">
      <DatePicker
        selected={this.state.startDate}
        onChange={this.handleChange}
        withPortal
        className="date-picker"
      />
      </div>
    );
  }
}

export default DatePickerComponent;

// {defaultValue={moment().format("YYYY-MM-DD")}}
