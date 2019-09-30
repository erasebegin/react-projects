import './SeasonDisplay.css';
import React from 'react';

const getSeason = (lat, month) => {
    if(month > 2 && month < 9) {
        return lat > 0 ? 'summer' : 'winter';
    } else {
        return lat > 0 ? 'winter' : 'summer';
    }
}

const seasonConfig = {
    winter: {
        iconName: 'snowflake',
        text: 'S\' col mayn.'
    },
    summer: {
        iconName: 'sun',
        text: 'Whadup suuuun.'
    }
}

const SeasonDisplay = (props) => {
    const season = getSeason(props.lat, new Date().getMonth());
    const {text, iconName} = seasonConfig[season];

    return (
    
    <div className={`display-${season} container`}>
        <div><i className={`${iconName} icon massive right`}></i></div>
        <h1>Iss {season} where you at. {text}</h1>
        <div><i className={`${iconName} icon massive left`}></i></div>
    </div>
    )
}

export default SeasonDisplay;