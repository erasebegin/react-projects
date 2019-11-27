import React from "react";
import { HorizontalBar } from "react-chartjs-2";

class MovementBar extends React.Component {
    constructor(props) {
      super(props);
    }
  
    render() {
  
      return (
        <div className="movement-bar-container">
          <HorizontalBar
            data={{
                labels: this.props.Labels,
              datasets: [
                {
                  data: this.props.Data,
                  backgroundColor: ["#FFD6A3", "#9581B5"]
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
            }}
            height={300}
            width={800}
          />
        </div>
      );
    }
  }
  
  export default MovementBar;