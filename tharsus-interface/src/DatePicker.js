import React from 'react'
import moment from 'moment'

class DatePicker extends React.Component {
    
    constructor(props) {
        super(props)
        this.state = {dateInput:''}
    }

    handleChange (event) {

        this.setState({dateInput: event.target.value})
        console.log(this.state)
    }




    render(){
        return(
            <div className="DatePicker">
                <input type="date" onChange={this.handleChange.bind(this)}></input>
            </div>
            )
        }
}

   

export default DatePicker