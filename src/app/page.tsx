"use client";

import { useEffect, useState } from "react";
import { getMovies } from "./actions";
import { MovieCard } from "../components/MovieCard";
import { Movie } from "../types/movie";

export default function Home() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      const data = await getMovies();
      if (data.results) {
        setMovies(data.results);
      }
      setIsLoading(false);
    }

    fetchData();
  }, []);

  console.log("movies", movies);

  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold mb-4">Mais populares</h1>

      {isLoading && <p>Carregando...</p>}

      {!isLoading && movies.length === 0 && <p>Nenhum filme encontrado.</p>}

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {movies.map((movie: Movie) => (
          <MovieCard
            key={movie.id}
            id={movie.id}
            title={movie.title}
            poster_path={movie.poster_path}
            rating={movie.vote_average}
          />
        ))}
      </div>
    </main>
  );
}
