import React from "react";

function VideoItem({ video }) {
  console.log("vide", video);
  return (
    <div>
      <div class="ui relaxed list">
        <div class="item " style={{ display: "flex" }}>
          <img class="videoImg" src={video.snippet.thumbnails.high.url} />
          <div class="content">
            <div class="description">{video.snippet.title}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideoItem;
