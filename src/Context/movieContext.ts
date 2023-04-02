import { createContext } from "react";
import TMovie from "../utils/types";


export const MovieContext = createContext({
    movies: [] as TMovie[],
    setMovies: (movies: TMovie[]) => {},
    isLoading: true,
    setIsLoading: (isLoading: boolean) => {},
    similarMovies: [] as TMovie[],
    setSimilarMovies: (similarMovies: TMovie[]) => {}
});