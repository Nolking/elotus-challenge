import React from "react";
import { Card, Skeleton } from "antd";
import MyImage from "./MyImage";
import useMovie from "../Context/movieContext";

const MovieDetailCard = () => {
  const { state } = useMovie();
  const { movieDetail, isLoading } = state;
  if (!isLoading) {
    return (
      <React.Fragment>
        <Card className="movie-card-wrapper">
          <div className="movie-card-content">
            <div className="movie-card-image">
              <MyImage
                src={`https://image.tmdb.org/t/p/w500${movieDetail.poster_path}`}
                alt={movieDetail.tagline}
              />
            </div>
            <div className="movie-card-details">
              <h3>{movieDetail.title}</h3>
              <p>
                <b>Release date: </b>
                {movieDetail.release_date}
              </p>
              <p>
                <b>IMDB: </b> {movieDetail.vote_average}
              </p>
              <p>
                <b>Runtime: </b> {movieDetail.runtime} minutes
              </p>
              <p>{movieDetail.overview}</p>
            </div>
          </div>
        </Card>
      </React.Fragment>
    );
  } else {
    return (
      <React.Fragment>
        <Card className="movie-card-wrapper">
          <Skeleton.Image
            className="movie-card-image"
            style={{ width: 300, height: 450 }}
            active={true}
          />
          <div className="movie-card-details">
            <Skeleton active={true} paragraph={{ rows: 4 }}></Skeleton>
          </div>
        </Card>
      </React.Fragment>
    );
  }
};

export default MovieDetailCard;
