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

  const backgroundcolor =
    "bg-linear-180 from-backgroundsecondary/0 via-backgroundsecondary/70 to-backgroundsecondary/0";

  return (
    <div>
      <div className="w-screen ">
        <div
          className="
            relative flex flex-col justify-end max-w-9xl mx-auto h-96 p-14 gap-4 
            bg-[url('/bg.jpg')] bg-cover bg-center text-white
            before:absolute before:inset-0 before:bg-black/20 "
        >
          <h1 className="text-5xl font-extrabold relative z-10">
            Bem-Vindo(a).
          </h1>
          <h2 className="text-3xl relative z-10">
            Milhões de Filmes, Séries e Artistas para Descobrir. Explore já.
          </h2>
          <input type="text" className="relative z-10" />
        </div>
      </div>

      <MovieSession
        title={"Mais populares"}
        isLoading={isLoading}
        movies={popularMovies}
      />

      <MovieSession
        title="Tendências"
        isLoading={isLoadingToday}
        movies={todayMovies}
        backgroundColor={backgroundcolor}
      />
    </div>
  );
}
