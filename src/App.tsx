import { useState } from "react";
import TMovie from "./utils/types";
import { MovieContext } from "./Context/movieContext";
import MainRoutes from "./Routes";

function App() {
  const [movies, setMovies] = useState<TMovie[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [similarMovies, setSimilarMovies] = useState<TMovie[]>([]);
  const value = { movies, setMovies, isLoading, setIsLoading, similarMovies, setSimilarMovies}
  return (
    <MovieContext.Provider value={value}>
      <div className="App">
        <MainRoutes></MainRoutes>
      </div>
    </MovieContext.Provider>
  );
}

export default App;
