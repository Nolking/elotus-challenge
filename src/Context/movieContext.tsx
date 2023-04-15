import { createContext, useContext, useReducer } from "react";
import TMovie from "../utils/types";
import movieReducer, { initialState } from "./movieReducer";
import fetchData from "../utils/fetchData";

export const MovieContext = createContext<{
  state: typeof initialState;
  dispatch: React.Dispatch<any>;
  getMovieDetail: (id: string) => void;
  getNowPlayingMovies: () => void;
  getSimilarMovies: (id: string) => void;
  setIsLoading: () => void;
  getTopRatedMovies: () => void;
}>({
  state: initialState,
  dispatch: (action: any) => {},
  getMovieDetail: () => {},
  getNowPlayingMovies: () => {},
  getSimilarMovies: (id: string) => {},
  setIsLoading: () => {},
  getTopRatedMovies: () => {},
});

export const MovieProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(movieReducer, initialState);
  const setIsLoading = () => {
    dispatch({ type: "SET_LOADING" });
  };
  const setMovies = (movies: TMovie[]) => {
    dispatch({ type: "SET_MOVIES", payload: { ...state, movies } });
  };
  const setSimilarMovies = (similarMovies: TMovie[]) => {
    dispatch({
      type: "SET_SIMILAR_MOVIES",
      payload: { ...state, similarMovies },
    });
  };
  const setMovieDetail = (movieDetail: TMovie) => {
    dispatch({ type: "SET_MOVIE_DETAIL", payload: { ...state, movieDetail } });
  };
  const getMovieDetail = async (id: string) => {
    try {
      setIsLoading();
      const response = await fetchData("detail", id).then((res) => res.json());
      setTimeout(() => {
        setMovieDetail(response);
      }, 500);
    } catch (error) {
      console.log(error);
    }
  };

  const getNowPlayingMovies = async () => {
    try {
      const response = await fetchData("now_playing").then((res) => res.json());
      setTimeout(() => {
        setMovies(response.results);
      }, 500);
    } catch (error) {
      console.log(error);
    }
  };
  const getTopRatedMovies = async () => {
    try {
      setIsLoading();
      const response = await fetchData("top_rated").then((res) => res.json());
      setTimeout(() => {
        setMovies(response.results);
      }, 500);
    } catch (error) {
      console.log(error);
    }
  };
  const getSimilarMovies = async (id: string) => {
    try {
      setIsLoading();
      const response = await fetchData("similar_movies", id).then((res) =>
        res.json()
      );
      setTimeout(() => {
        setSimilarMovies(response.results.slice(0, 5));
      }, 500);
      console.log(state);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <MovieContext.Provider
      value={{
        state,
        dispatch,
        getMovieDetail,
        getSimilarMovies,
        getNowPlayingMovies,
        getTopRatedMovies,
        setIsLoading,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};

const useMovie = () => {
  const context = useContext(MovieContext);
  if (context === undefined) {
    throw new Error("useMovie must be used within a MovieProvider");
  }
  return context;
};

export default useMovie;
