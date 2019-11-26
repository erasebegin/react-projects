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
                  backgroundColor: ["#B36671","#FFFA91","#FFAAB7","#74B1CC","#6F9EB3","#B36671","#FFFA91"]
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
            height={this.props.Height}
            width={this.props.Width}
          />
        </div>
      );
    } else if (this.props.chartType === "Pie") {
      return (
        <div>
          <Pie
            data={{
              labels: this.props.Labels,
              datasets: [
                {
                  data: this.props.Data,
                  backgroundColor: ["rgb(179, 102, 113)","rgb(255, 252, 194)","rgb(255, 170, 183)","rgb(117, 178, 204)","rgb(111, 158, 179)"]
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
            height={this.props.Height}
            width={this.props.Width}
          />
        </div>
      )} else if (this.props.chartType === "HorizontalBar") {
        return (
          <div>
            <HorizontalBar
              data={{
                labels: this.props.Labels,
                datasets: [
                  {
                    data: this.props.Data,
                    backgroundColor: ["rgb(179, 102, 113)"]
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
                      display: false,
                      ticks: {
                          suggestedMax: 5, beginAtZero: true    // minimum will be 0, unless there is a lower value.
                      }
                  }]
              }
              }}
              height={this.props.Height}
              width={this.props.Width}
            />
          </div>
        );
            }
  }
}

export default DistributionDataDisplay;
