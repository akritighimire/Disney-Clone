import axios from "axios";

const movieBaseUrl = "https://api.themoviedb.org/3";
const api_key = "6e28ef5fc05c88285de52c80b2de6633";
const movieByGenreBaseURL =
  "https://api.themoviedb.org/3/discover/movie?api_key=6e28ef5fc05c88285de52c80b2de6633";
//https://api.themoviedb.org/3/movie/157336?api_key=6e28ef5fc05c88285de52c80b2de6633&append_to_response=videos

const getTrendingVideos = axios.get(
  movieBaseUrl + "/trending/all/day?api_key=" + api_key
);

const getMovieByGenreId = (id) =>
  axios.get(movieByGenreBaseURL + "&with_genres=" + id);

// const getTrendingVideos = axios.get(
//   `{$movieBaseUrl}/movie/157336?api_key={api_key}`
// )

export default { getTrendingVideos, getMovieByGenreId }; //export the api endpoint
