import React from "react";
import MovementDataDisplay from "./MovementDataDisplay";
import OverviewDataDisplay from "./OverviewDataDisplay";
import DistributionDataDisplay from "./DistributionDataDisplay";
import "../styles/DataDisplay.css"

// const { moving_hours = {} } = data;
// const { moving = {} } = moving_hours;
// const { inside, outside } = moving;

class DataDisplay extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log("from DataDisplay: ");
    const {
      apiData: { site_hours = {} }
    } = this.props;
    const { inside = 0, outside = 0 } = site_hours;
    const {
      apiData: { workforce_distribution = {} }
    } = this.props;
    const {
      "Top Box": topBox = 0,
      Firewall = 0,
      Subs = 0,
      PCB = 0,
      "3D Build": threeD = 0,
      FAT = 0,
      "Wake Up": wakeUp = 0
    } = workforce_distribution;

    if (this.props.NavState === "movement") {
      return (
        <div className="chart-container">
          <MovementDataDisplay
            Data={[inside, outside]}
            Title="Site Hours"
            Labels={["inside", "outside"]}
          />
          <MovementDataDisplay
            Data={[3, 9]}
            Title="Moving Hours"
            Labels={["inside", "outside"]}
          />
        </div>
      );
    }
    if (this.props.NavState === "overview") {
      return (
        <div className="chart-container">
          <OverviewDataDisplay
            Data={[3.3176110809420893, 4.18238891905791]}
            Title="Site Hours"
          />
          <OverviewDataDisplay
            Data={[3.9176110809420893, 4.18238891905791]}
            Title="Moving Hours"
          />
        </div>
      );
    } else if (this.props.NavState === "distribution") {
      return (
        <div>
          <DistributionDataDisplay
            chartType={"Pie"}
            Labels={[
              "Tob Box",
              "Firewall",
              "Subs",
              "PCB",
              "3D Build",
              "FAT",
              "Wake up"
            ]} //TODO: generate array of labels from object
            Data={[topBox, Firewall, Subs, PCB, threeD, FAT, wakeUp]}
            Title="Workforce Distribution"
          />
          <DistributionDataDisplay
            chartType={"Bar"}
            Labels={[
              "Tob Box",
              "Firewall",
              "Subs",
              "PCB",
              "3D Build",
              "FAT",
              "Wake up"
            ]}
            Data={[topBox, Firewall, Subs, PCB, threeD, FAT, wakeUp]}
            Title="Workforce Distribution"
          />
        </div>
      );
    }
  }
}

export default DataDisplay;
