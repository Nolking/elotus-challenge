import TMovie, { TMovieDetail } from "../utils/types";

export const initialState = {
  movies: [] as TMovie[],
  isLoading: true,
  similarMovies: [] as TMovie[],
  movieDetail: {} as TMovieDetail,
};

const movieReducer = (state: typeof initialState, action: any) => {
  const { type, payload } = action;

  switch (type) {
    case "SET_LOADING":
      return {
        ...state,
        isLoading: true,
      };
    case "SET_MOVIES":
      return {
        ...state,
        movies: payload.movies,
        isLoading: false,
      };
    case "SET_SIMILAR_MOVIES":
      return {
        ...state,
        similarMovies: payload.similarMovies,
        isLoading: false,
      };
    case "SET_MOVIE_DETAIL":
      return {
        ...state,
        movieDetail: payload.movieDetail,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default movieReducer;
