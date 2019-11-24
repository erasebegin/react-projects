import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";

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
