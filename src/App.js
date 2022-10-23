import React, { useState } from "react";
import Searchbar from "./component/Searchbar";
import VideoList from "./component/VideoList";
import youtube from "./component/youtube";
import "./App.css";
function App() {
  const [video, setVideo] = useState([]);
  var API_KEY = "";
  const SearchInputSubmitted = async (data) => {
    const res = await youtube.get("/search", {
      params: {
        q: data,
      },
    });
    setVideo(res.data.items);
  };
  return (
    <div>
      <Searchbar onSubmitted={SearchInputSubmitted} />
      <h1>{video.length}</h1>
      <VideoList video={video} />
    </div>
  );
}

export default App;
