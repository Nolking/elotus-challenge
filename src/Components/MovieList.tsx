import React, { useState, useEffect, useContext } from "react";
import { List, Button, Switch, Skeleton } from "antd";
import { MovieContext } from "../Context/movieContext";
import fetchData from "../utils/fetchData";
import { Link } from "react-router-dom";
import MyImage from "./MyImage";

type MovieListProps = {
  configSpace?: boolean;
  title?: string;
  grid?: boolean;
  isSimilar?: boolean;
};
const MovieList = ({ configSpace, title, grid, isSimilar }: MovieListProps) => {
  const { movies, setMovies, isLoading, setIsLoading, similarMovies } =
    useContext(MovieContext);
  const [selected, setSelected] = useState(true);
  const [gridView, setGridView] = useState(grid ? grid : false);
  const switchView = () => {
    setGridView(!gridView);
  };

  const handleList = (dataType: string) => {
    try {
      setIsLoading(true);
      setTimeout(async () => {
        const response = await fetchData(dataType).then((res) => res.json());
        setMovies(response.results);
        setIsLoading(false);
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
        setIsLoading(false);
      }, 500);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getNowPlayingMovies();
  }, []);
  if (!isLoading) {
    return (
      <React.Fragment>
        {title && <h2 style={{ margin: 0 }}>{title}</h2>}
        <div className="movie-list-wrapper">
          {configSpace && (
            <React.Fragment>
              <div className="movie-list-switch">
                GridView
                <Switch
                  style={{ marginLeft: "10px" }}
                  checked={gridView}
                  onChange={switchView}
                />
              </div>
              <div className="movie-list-button-area">
                <Button
                  onClick={(e) => {
                    e.preventDefault();
                    handleList("now_playing");
                    setSelected(true);
                  }}
                  type={selected ? "primary" : "default"}
                >
                  Now Playing
                </Button>
                <Button
                  type={selected ? "default" : "primary"}
                  onClick={(e) => {
                    e.preventDefault();
                    handleList("top_rated");
                    setSelected(false);
                  }}
                >
                  Top Rated
                </Button>
              </div>
            </React.Fragment>
          )}
          {gridView ? (
            <List
              grid={{ gutter: 16, column: 5 }}
              className={"movie-list-content grid-view"}
              dataSource={isSimilar ? similarMovies : movies}
              renderItem={(item) => (
                <List.Item className="movie-list-item">
                  <MyImage
                    src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                  />
                  <div className="movie-list-details">
                    <h3>
                      <Link
                        to={`/movie/${item.id}`}
                        onClick={() => {
                          window.scrollTo(0, 0);
                        }}
                      >
                        {item.title}
                      </Link>
                    </h3>
                    <p>{item.release_date}</p>
                    <p>{item.overview}</p>
                  </div>
                </List.Item>
              )}
            ></List>
          ) : (
            <List
              grid={{ gutter: 16, column: 1 }}
              className={"movie-list-content list-view"}
              dataSource={movies}
              renderItem={(item) => (
                <List.Item className="movie-list-item">
                  <MyImage
                    src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                  />
                  <div className="movie-list-details">
                    <h3>
                      <Link
                        to={`/movie/${item.id}`}
                        onClick={() => {
                          window.scrollTo(0, 0);
                        }}
                      >
                        {item.title}
                      </Link>
                    </h3>
                    <p>{item.release_date}</p>
                    <p>{item.overview}</p>
                  </div>
                </List.Item>
              )}
            ></List>
          )}
        </div>
      </React.Fragment>
    );
  } else {
    return (
      <React.Fragment>
        <div className="movie-list-wrapper">
          <div className="movie-list-switch">
            <Skeleton.Input active={true} style={{ width: 100 }} />
          </div>
          <div className="movie-list-button-area">
            <Skeleton.Input active={true} style={{ width: 100 }} />
            <Skeleton.Input active={true} style={{ width: 100 }} />
          </div>
          <List
            grid={
              gridView ? { gutter: 16, column: 5 } : { gutter: 16, column: 1 }
            }
            className={
              gridView
                ? "movie-list-content grid-view"
                : "movie-list-content list-view"
            }
            dataSource={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
            renderItem={(item) => (
              <List.Item className="movie-list-item">
                <Skeleton.Image
                  active={true}
                  style={{ width: 220, height: 330 }}
                />
                {!gridView && (
                  <Skeleton active={true} paragraph={{ rows: 3 }} />
                )}
              </List.Item>
            )}
          ></List>
        </div>
      </React.Fragment>
    );
  }
};

export default MovieList;
