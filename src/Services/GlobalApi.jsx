import axios from "axios";

const moviesBaseUrl = "https://api.themoviedb.org/3";
const api_key = "5b53b7f6f16e2001e5418298c990bf2a";
//https://api.themoviedb.org/3/trending/all/day?api_key=5b53b7f6f16e2001e5418298c990bf2a
const getTrendingVideos = axios.get(
  moviesBaseUrl + "/trending/all/day?api_key=" + api_key);


