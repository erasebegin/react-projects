import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({videos, onVideoSelect}) => {
    const renderedList = videos.map((video)=>{
        return <VideoItem onVideoSelect={onVideoSelect} video={video} />;
    })

    return ( 
        <div className="ui divided relaxed list">
            {renderedList} 
        </div>
    )
    
}

export default VideoList