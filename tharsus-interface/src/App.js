

import React from 'react'
import moment from 'moment'
import axios from 'axios'
import Nav from './Nav'
import MovementDataDisplay from './MovementDataDisplay'

class App extends React.Component {
  constructor() {
    super();

    this.state = {appDate:moment().format("1995-12-25", "YYYY-MM-DD"),apiData:''}

  }

  componentDidMount() {
    console.log(this.state.appDate)

    const fastapi = axios({
        url: 'https://tharsus-interview-api-v1.azurewebsites.net/data/2019-10-19',
        method: 'get',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => {
        console.log(response)
    }) 
    .catch(err => {
        console.log(err);
    })

    
  }

  render() {
    return(
      <div>
        <Nav />
         <MovementDataDisplay apiData={[3.3176110809420893, 4.18238891905791]}/>  {/* From here can pass in 'data' prop from api call for display in table */}
      </div>
    )
  }
}

export default App;
