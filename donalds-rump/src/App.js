import React from "react";
import tronalddump from "./api/tronald_dump";
import "./App.css";


class App extends React.Component {

  constructor() {
    super()
    this.state = {
      quote: "",
      loading: true 
    }
  }
  
  componentDidMount() {
    tronalddump.get("/random/quote")
    .then((result)=>this.setState({quote:result.data.value, loading: false}))
  }

  newQuote () {
    this.setState({loading:true})
    tronalddump.get("/random/quote")
    .then((result)=>this.setState({quote:result.data.value, loading: false}))
  }

  render() {

    const textStyle = {
      color: "gray",
      fontFamily: "sans-serif",
    }
    
    return (
      <div className="App">
        <h1 style={textStyle}>{this.state.quote}</h1>
    <p onClick={this.newQuote.bind(this)}>{this.state.loading === true ? "Loading..." : "Next"}</p>
      </div>
    );
  }

}

export default App;
