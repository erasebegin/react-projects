import React from "react";
import {Bar} from "react-chartjs-2";

class DataDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: {
        labels: ["outside", "inside"],
        datasets: [
          {
            data: props.apiData,
            backgroundColor: ["rgba(255,99,132,0.5)", "rgba(255,159,64,0.5)"]
          }
        ]
      }
    }
  }

  render() {
    return (
      <Bar
        data={this.state.chartData}
        options={{
          title:{
              display: true,
              text: 'Site Hours',
              fontSize: 25
          },
          legend:{display:false}
        }}
      />
    );
  }
}

export default DataDisplay;