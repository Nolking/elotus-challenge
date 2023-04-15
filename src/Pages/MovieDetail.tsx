import React, { useState, useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";
import MovieDetailCard from "../Components/MovieDetailCard";
import PageWrapper from "../Layout/PageWrapper";
import useMovie from "../Context/movieContext";
import MovieList from "../Components/MovieList";

const MovieDetail = function () {
  const { id } = useParams();
  const [errorMessage] = useState<string>("" as string);
  const { getMovieDetail } = useMovie();
  useEffect(() => {
    if (id === undefined) return;
    else getMovieDetail(id);
  }, [id]);
  return (
    <PageWrapper>
      <React.Fragment>
        {errorMessage.trim().length > 0 && (
          <h2 style={{ margin: 0, color: "red" }}>{errorMessage}</h2>
        )}
      </React.Fragment>
      <MovieDetailCard></MovieDetailCard>
      <MovieList
        title="Similar Movies"
        grid={true}
        isSimilar={true}
      ></MovieList>
    </PageWrapper>
  );
};

export default MovieDetail;
