import React from "react";
import {HorizontalBar,Pie,Bar} from "react-chartjs-2";

class DistributionDataDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: {
        labels: ["outside", "inside"],
        datasets: [
          {
            data: props.Data,
            backgroundColor: ["rgb(255, 170, 183)", "rgb(233, 208, 178)"]
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
            maintainAspectRatio: false,
            responsive: true,
            title:{
                display: true,
                text: this.props.Title,
                fontSize: 25
            },
            legend:{display:false},
          }}
          height={300}
          width={900}
        />
      </div>
    );
  }
}

export default DistributionDataDisplay;
