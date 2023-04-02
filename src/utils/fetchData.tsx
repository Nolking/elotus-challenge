import keys from "../config/keys";

const BASE_URL = `https://api.themoviedb.org/3/movie/`;

const fetchData = async (dataType: string, movieId?: string) => {
  let url = "";
  switch (dataType) {
    case "now_playing":
      url = `${BASE_URL}${dataType}?api_key=${keys.API_KEY}&language=en-US&page=1`;
      break;
    case "top_rated":
      url = `${BASE_URL}${dataType}?api_key=${keys.API_KEY}&language=en-US&page=1`;
      break;
    case "similar_movies":
      url = `${BASE_URL}${movieId}/similar?api_key=${keys.API_KEY}&language=en-US&page=1`;
      break;
    case "detail":
      url = `${BASE_URL}${movieId}?api_key=${keys.API_KEY}&language=en-US&page=1`;
      break;
    default:
      url = BASE_URL;
      break;
  }
  return fetch(url, { method: "GET" });
};

export default fetchData;
