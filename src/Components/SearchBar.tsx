import React, { useState, useRef, useEffect } from "react";
import { Image, Input, List } from "antd";
import TMovie from "../utils/types";
import { Link } from "react-router-dom";
import useMovie from "../Context/movieContext";

const SearchBar = () => {
  const { state, setIsLoading, getNowPlayingMovies } = useMovie();
  const [filteredMovies, setFilteredMovies] = useState<TMovie[]>([]);
  const [errorMessage] = useState<string>("");

  const { movies } = state;
  const ref = useRef(null);
  useOutsideAlerter(ref);
  function useOutsideAlerter(ref: any) {
    useEffect(() => {
      // Function for click event
      function handleOutsideClick(event: any) {
        if (ref.current && !ref.current.contains(event.target)) {
          setFilteredMovies([]);
        }
      }
      // Adding click event listener
      document.addEventListener("click", handleOutsideClick);
      return () => document.removeEventListener("click", handleOutsideClick);
    }, [ref]);
  }

  const handleInput = async (e: any) => {
    e.preventDefault();
    getNowPlayingMovies();
    let result = movies.filter((item: TMovie) =>
      item.title.toLowerCase().includes(e.target.value.toLowerCase())
    );
    if (e.target.value === "") {
      setFilteredMovies([]);
    } else {
      setFilteredMovies(result);
    }
    // }
  };
  return (
    <React.Fragment>
      <div className="search-bar-wrapper">
        <Input
          onChange={handleInput}
          placeholder="Search now playing movies"
        ></Input>
        {errorMessage.length > 0 && <p>{errorMessage}</p>}
        {filteredMovies.length > 0 && (
          <div ref={ref}>
            <List
              className="search-bar-result"
              dataSource={filteredMovies}
              renderItem={(item) => (
                <List.Item className="search-bar-result__item">
                  <Image
                    width={60}
                    src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                  />
                  <div className="search-bar-result__item-details">
                    <h3>
                      <Link
                        to={`/movie/${item.id}`}
                        onClick={(e) => {
                          window.scrollTo(0, 0);
                          setFilteredMovies([]);
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
            ></List>{" "}
          </div>
        )}
      </div>
    </React.Fragment>
  );
};

export default SearchBar;
