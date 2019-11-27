import React from "react";
import { HorizontalBar } from "react-chartjs-2";

class MovementDataDisplay extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div className="Movement">
        <HorizontalBar
          data={{
            labels: this.props.Labels,
            datasets: [
              {
                label: "inside",
                data: this.props.Set1,
                backgroundColor: ["#8AD49A", "#FFD6A3"]
              },
              {
                label: "outside",
                data: this.props.Set2,
                backgroundColor: ["#7F5AB8"]
              }
            ]
          }}
          options={{
            maintainAspectRatio: false,
            responsive: true,
            title: {
              display: true,
              text: this.props.Title,
              fontSize: 25
            },
            legend: { display: false },
            scales: {
                xAxes: [{ stacked: true }],
                yAxes: [{ stacked: true }]
              }
          }}
          height={300}
          width={800}
        />
      </div>
    );
  }
}

export default MovementDataDisplay;
