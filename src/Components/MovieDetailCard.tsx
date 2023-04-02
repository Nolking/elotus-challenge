import React from "react";
import { Card, Skeleton } from "antd";
import { TMovieDetail } from "../utils/types";
import MyImage from "./MyImage";

type MovieDetailCardProps = {
  movie: TMovieDetail;
  isLoading: boolean;
};
const MovieDetailCard = ({ movie, isLoading }: MovieDetailCardProps) => {
  if (!isLoading) {
    return (
      <React.Fragment>
        <Card className="movie-card-wrapper">
          <div className="movie-card-content">
            <div className="movie-card-image">
              <MyImage 
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.tagline}
              />
            </div>
            <div className="movie-card-details">
              <h3>{movie.title}</h3>
              <p>
                <b>Release date: </b>
                {movie.release_date}
              </p>
              <p>
                <b>IMDB: </b> {movie.vote_average}
              </p>
              <p>
                <b>Runtime: </b> {movie.runtime} minutes
              </p>
              <p>{movie.overview}</p>
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
