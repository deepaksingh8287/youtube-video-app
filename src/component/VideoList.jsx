import React from "react";
import VideoItem from "./VideoItem";

function VideoList({ video }) {
  const renderList = video.map((value) => {
    return <VideoItem video={value} />;
  });
  return <div>{renderList}</div>;
}

export default VideoList;
