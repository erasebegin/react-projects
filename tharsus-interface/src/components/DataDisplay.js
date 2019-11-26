import React from "react";
import MovementBar from "./charts/MovementBar";
import MovementStacked from "./charts/MovementStacked";
import OverviewDataDisplay from "./OverviewDataDisplay";
import DistributionDataDisplay from "./DistributionDataDisplay";
import "../styles/DataDisplay.css";

// const { moving_hours = {} } = data;
// const { moving = {} } = moving_hours;
// const { inside, outside } = moving;

class DataDisplay extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      apiData: { site_hours = {} }
    } = this.props;
    const { inside = 0, outside = 0 } = site_hours;
    const {
      apiData: { moving_hours = {} }
    } = this.props;
    const { moving = {}, stationary = 0 } = moving_hours;
    const { inside: movingInside = 0, outside: movingOutside = 0 } = moving;
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
    const {
      apiData: { work_scatter_meters: workScatterMeters = 0 }
    } = this.props;
    const {
      apiData: { minues_in_area = {} }
    } = this.props;
    const {
      Stores: stores = 0,
      "Goods In": goodsIn = 0,
      Quality: quality = 0,
      Inspection: inspection = 0
    } = minues_in_area;

    console.log("work scatter meters: ", workScatterMeters);

    if (this.props.NavState === "movement") {
      return (
        <div className="chart-container">
          <MovementBar
            Title="Site Hours"
            Data={[inside, outside]}
            Labels={["inside", "outside"]}
          />
          <MovementStacked
            Title="Moving Hours"
            Set1={[movingInside, movingOutside]}
            Set2={[stationary]}
            Labels={["moving", "stationary"]}
          />
        </div>
      );
    }
    if (this.props.NavState === "overview") {
      return (
        <div className={("chart-container", "overview-container")}>
          <OverviewDataDisplay
            Set1={[3.3176110809420893, 4.18238891905791]}
            Title="Site Hours"
          />
          <OverviewDataDisplay
            Set1={[3.9176110809420893, 4.18238891905791]}
            Set2={[8.3176110809420893, 1.18238891905791]}
            Title="Moving Hours"
          />
        </div>
      );
    } else if (this.props.NavState === "distribution") {
      return (
        <div className={"distribution-container"}>
          <DistributionDataDisplay
            Title="Work Scatter Meters"
            chartType={"HorizontalBar"}
            Labels={["Work Scatter Meters"]}
            Data={[workScatterMeters]}
          />
          <DistributionDataDisplay
            Title="Minues in Area"
            chartType={"Bar"}
            Labels={[
              "Stores",
              "Goods In",
              "Quality",
              "Inspection"
            ]} //TODO: generate array of labels from object
            Data={[stores, goodsIn, quality, inspection]}
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
