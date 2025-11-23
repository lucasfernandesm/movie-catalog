"use client";

import { useEffect, useState } from "react";
import { getPopularMovies, getTodayMovies } from "./actions";
import { Movie } from "../types/movie";
import { MovieSession } from "../components/MovieSession";

export default function Home() {
  const [popularMovies, setPopularMovies] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [todayMovies, setTodayMovies] = useState<Movie[]>([]);
  const [isLoadingToday, setIsLoadingToday] = useState(true);

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

  useEffect(() => {
    async function fetchTodayMovies() {
      setIsLoadingToday(true);
      const data = await getTodayMovies();
      if (data?.results) {
        setTodayMovies(data.results);
      }
      setIsLoadingToday(false);
    }

    fetchTodayMovies();
  }, []);

  console.log("popularMovies", popularMovies);
  console.log("todayMovies", todayMovies);

  return (
    <div>
      <div className="relative w-screen left-1/2 right-1/2 ml-[-50vw] mr-[-50vw]">
        <MovieSession
          title={"Mais populares"}
          isLoading={isLoading}
          movies={popularMovies}
        />
      </div>
      <div
        className="relative w-screen left-1/2 right-1/2 ml-[-50vw] mr-[-50vw]
      bg-linear-180
      from-backgroundsecondary/0 via-backgroundsecondary/70 to-backgroundsecondary/0
      "
      >
        <MovieSession
          title="Tendências"
          isLoading={isLoadingToday}
          movies={todayMovies}
        />
      </div>
    </div>
  );
}
