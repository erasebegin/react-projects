import React from 'react'
import moment from 'moment'
import axios from 'axios'
import Nav from './Nav'
import MovementDataDisplay from './MovementDataDisplay'
import './App.css'

class App extends React.Component {
  constructor() {
    super();

    this.state = {appDate:moment().format("1995-12-25", "YYYY-MM-DD"),apiData:''}
    let siteHours = [];
  }

  componentDidMount() {
    console.log(this.state.appDate)

    const requestData = axios({
        url: 'https://tharsus-interview-api-v1.azurewebsites.net/data/2019-10-19',
        method: 'get',
        headers: {
            'content-type': 'application/json'
        }
    })
    .then(response => {
        this.setState({apiData:response})
    }) 
    .catch(err => {
        console.log(err);
    })

  }

  render() {
    return(
      <div className="App">
        <Nav />
        <MovementDataDisplay Data={[3.3176110809420893, 4.18238891905791]}/> 
      </div>
    )
  }
}

export default App;
