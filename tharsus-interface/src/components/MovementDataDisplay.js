import React from "react";
import {HorizontalBar} from "react-chartjs-2";

class MovementDataDisplay extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log("chart component says",this.props.Data)
    return (
      <div className="Movement">
        <HorizontalBar
          data={{
            labels: this.props.Labels,
            datasets: [
              {
                data: this.props.Data,
                backgroundColor: ["rgb(255, 100, 183)", "rgb(233, 208, 178)"]
              }
            ]
          }}
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
          width={800}
        />
      </div>
    );
  }
}

export default MovementDataDisplay;
