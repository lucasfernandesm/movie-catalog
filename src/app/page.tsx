"use client";

import { useEffect, useState } from "react";
import { getPopularMovies } from "./actions";
import { Movie } from "../types/movie";
import { MovieSession } from "../components/MovieSession";

export default function Home() {
  const [popularMovies, setPopularMovies] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchPopularMovies() {
      setIsLoading(true);
      const data = await getPopularMovies();
      if (data?.results) {
        setPopularMovies(data.results);
      }
      setIsLoading(false);
    }

    fetchPopularMovies();
  }, []);

  console.log("popularMovies", popularMovies);

  return (
    <MovieSession
      title={"Mais populares"}
      isLoading={isLoading}
      movies={popularMovies}
    />
  );
}
