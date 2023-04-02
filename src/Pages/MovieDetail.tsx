import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import fetchData from "../utils/fetchData";
import MovieDetailCard from "../Components/MovieDetailCard";
import PageWrapper from "../Layout/PageWrapper";
import { MovieContext } from "../Context/movieContext";
import { TMovieDetail } from "../utils/types";
import MovieList from "../Components/MovieList";

const MovieDetail = function () {
  const { id } = useParams();
  const [errorMessage, setErrorMessage] = useState<string>("" as string);
  const { setMovies, setSimilarMovies } = useContext(MovieContext);
  const [movie, setMovie] = useState<TMovieDetail>({} as TMovieDetail);
  const { isLoading, setIsLoading } = useContext(MovieContext);
  const getMovieDetail = async () => {
    try {
      setIsLoading(true);
      const fetchDetail = fetchData("detail", id).then((res) => res.json());
      const fetchSimilar = fetchData("similar_movies", id).then((res) =>
        res.json()
      );
      const [res1, res2] = await Promise.all([fetchDetail, fetchSimilar]);
      setTimeout(() => {
        if (res1.success === false) {
          setErrorMessage(res1.status_message);
          setIsLoading(false);
        } else {
          setMovie(res1);
          setSimilarMovies(res2.results.slice(0, 5));
          setErrorMessage("");
          setIsLoading(false);
        }
      }, 500);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getMovieDetail();
  }, [id]);
  return (
    <PageWrapper>
      <React.Fragment>
        {errorMessage.trim().length > 0 && (
          <h2 style={{ margin: 0, color: "red" }}>{errorMessage}</h2>
        )}
      </React.Fragment>
      <MovieDetailCard movie={movie} isLoading={isLoading}></MovieDetailCard>
      <MovieList title="Similar Movies" grid={true} isSimilar={true}></MovieList>
    </PageWrapper>
  );
};

export default MovieDetail;
