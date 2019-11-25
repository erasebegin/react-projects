import React from "react";
import { HorizontalBar, Pie, Bar } from "react-chartjs-2";

class DistributionDataDisplay extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.chartType === "Bar") {
      return (
        <div className="bar-container">
          <Bar
            data={{
              labels: this.props.Labels,
              datasets: [
                {
                  data: this.props.Data,
                  backgroundColor: ["rgb(255, 100, 183)"]
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
              legend: { display: false }
            }}
            height={300}
            width={900}
          />
        </div>
      );
    } else if (this.props.chartType === "Pie") {
      return (
        <div className="bar-container">
          <Pie
            data={{
              labels: this.props.Labels,
              datasets: [
                {
                  data: this.props.Data,
                  backgroundColor: ["rgb(255, 100, 183)"]
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
              legend: { display: false }
            }}
            height={300}
            width={900}
          />
        </div>
      )} else if (this.props.chartType === "HorizontalBar") {
        return (
          <div className="bar-container">
            <HorizontalBar
              data={{
                labels: this.props.Labels,
                datasets: [
                  {
                    data: this.props.Data,
                    backgroundColor: ["rgb(255, 100, 183)"]
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
                  yAxes: [{
                      display: true,
                      ticks: {
                          suggestedMax: 2, suggestedMin: 0    // minimum will be 0, unless there is a lower value.
                      }
                  }]
              }
              }}
              height={300}
              width={900}
            />
          </div>
        );
            }
  }
}

export default DistributionDataDisplay;
