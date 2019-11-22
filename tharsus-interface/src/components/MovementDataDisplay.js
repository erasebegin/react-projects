import React from "react";
import {Bar, HorizontalBar} from "react-chartjs-2";

class MovementDataDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: {
        labels: ["outside", "inside"],
        datasets: [
          {
            data: props.Data,
            backgroundColor: ["rgba(255,99,132,0.5)", "rgba(255,159,64,0.5)"]
          }
        ]
      }
    }
  }

  render() {
    return (
      <div className="Movement">
        <HorizontalBar
          data={this.state.chartData}
          options={{
            maintainAspectRatio: true,
            responsive: true,
            title:{
                display: true,
                text: this.props.Title,
                fontSize: 25
            },
            legend:{display:false},
          }}
        />
      </div>
    );
  }
}

export default MovementDataDisplay;
