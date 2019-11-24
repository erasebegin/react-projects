import React from "react";
import MovementDataDisplay from "./MovementDataDisplay";
import OverviewDataDisplay from "./OverviewDataDisplay";
import DistributionDataDisplay from "./DistributionDataDisplay";

class DataDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      siteHours: [],
      movingHours: []
    }
  }

  componentDidMount () {
    this.setState({siteHours:this.props.passAPIData.site_hours})
    this.setState({siteHours:this.props.passAPIData.moving_hours})
  }

  render() {
    console.log("from DataDisplay: ",this.state.siteHours)
    if (this.props.NavState === "movement") {
        return (
          <div className="chart-container">
            <MovementDataDisplay
              Data={this.state}
              Title="Site Hours"
              Labels={['inside','outside']}
            />
            <MovementDataDisplay
              Data={[1,3]}
              Title="Moving Hours"
            />
          </div>
        );
      } else if (this.props.NavState === "overview") {
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
        return <DistributionDataDisplay />;
      }
    }
}

export default DataDisplay;
