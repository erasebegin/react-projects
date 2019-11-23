import React from "react";
import M from "materialize-css";

class DatePicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = { dateInput: "" };
  }

  componentDidMount() {
    const datePicker = document.querySelectorAll(".date-picker");
    const options = {
        autoClose:true,
        format:"yyyy-mm-dd",
        i18n:{
            done:'',
            cancel:''
        }
    }
    M.Datepicker.init(datePicker,options);
  }

  handleChange(event) {
    this.setState({ dateInput: event.target.value });
    console.log(this.state);
  }

  render() {
    return (
      <div>
        <input type="text" onChange={this.handleChange.bind(this)} className="date-picker"></input>
      </div>
    );
  }
}

export default DatePicker;
