import React from "react";
import moment from "moment";
import 'react-datepicker';

class DatePicker extends React.Component {
  handleChange(event) {
    // this.props.passDate(event.target.value)
    console.log(event.target.value);
  }

  render() {
    return (
      <DatePicker
      onChange={this.handleChange.bind(this)}
      defaultValue={moment().format("YYYY-MM-DD")}
      withPortal
    />
    );
  }
}

export default DatePicker;
