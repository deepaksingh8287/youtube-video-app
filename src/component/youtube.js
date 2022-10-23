import axios from "axios";
var KEY = "AIzaSyB28hqxc9sbKI2rnZg5RUwuBQhx9_dKUnU";
export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3/",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 15,
    key: KEY,
    videoType: "any",
  },
});
