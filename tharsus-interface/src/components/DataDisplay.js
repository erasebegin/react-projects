import React from "react";
import MovementBar from "./charts/MovementBar";
import MovementStacked from "./charts/MovementStacked";
import DistributionDataDisplay from "./DistributionDataDisplay";
import "../styles/DataDisplay.css";

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
    else if (this.props.NavState === "overview") {
      return (
        <div className={("chart-container", "overview-container")}>
          <div className="overview-container-top">
          <DistributionDataDisplay
            Title="Movement"
            chartType={"Pie"}
            Labels={[
              "inside",
              "outside"
            ]} 
            Data={[movingInside,movingOutside]}
            Height={300}
            Width={200}
          />
          <DistributionDataDisplay
            Title="Minues in Area"
            chartType={"Bar"}
            Labels={[
              "Stores",
              "Goods In",
              "Quality",
              "Inspection"
            ]} 
            Data={[stores, goodsIn, quality, inspection]}
            Height={200}
            Width={300}
          />
          </div>
          <DistributionDataDisplay
            Title="Workforce Distribution"
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
            Height={400}
            Width={800}
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
            Height={100}
            Width={900}
          />
          <DistributionDataDisplay
            Title="Minues in Area"
            chartType={"Bar"}
            Labels={[
              "Stores",
              "Goods In",
              "Quality",
              "Inspection"
            ]} 
            Data={[stores, goodsIn, quality, inspection]}
            Height={300}
            Width={900}
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
            Height={300}
            Width={900}
          />
        </div>
      );
    }
  }
}

export default DataDisplay;
