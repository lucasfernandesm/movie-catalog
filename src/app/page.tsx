"use client";

import { useEffect, useState } from "react";
import { getPopularMovies, getTodayMovies, getWeekMovies } from "./actions";
import { Movie } from "../types/movie";
import { MovieSession } from "../components/MovieSession";

export default function Home() {
  const [popularType, setPopularType] = useState<
    "streaming" | "on-tv" | "for-rent" | "in-theatres"
  >("streaming");
  const [popularMovies, setPopularMovies] = useState<Movie[]>([]);
  const [isLoadingPopular, setIsLoadingPopular] = useState(true);

  const [trendType, setTrendType] = useState<"today" | "week">("today");
  const [trendMovies, setTrendMovies] = useState<Movie[]>([]);
  const [isLoadingTrends, setIsLoadingTrends] = useState(true);

  const popularTabs = [
    { label: "Streaming", value: "streaming" },
    { label: "Na TV", value: "on-tv" },
    { label: "Para alugar", value: "for-rent" },
    { label: "Nos cinemas", value: "in-theatres" },
  ];

  async function loadPopularMovies(
    type: "streaming" | "on-tv" | "for-rent" | "in-theatres"
  ) {
    setIsLoadingPopular(true);

    let data;

    switch (type) {
      case "streaming":
        data = await getPopularMovies("streaming");
        break;
      case "on-tv":
        data = await getPopularMovies("on-tv");
        break;
      case "for-rent":
        data = await getPopularMovies("for-rent");
        break;
      case "in-theatres":
        data = await getPopularMovies("in-theatres");
        break;
    }

    if (data?.results) setPopularMovies(data.results);

    setIsLoadingPopular(false);
  }

  useEffect(() => {
    loadPopularMovies(popularType);
  }, [popularType]);

  const trendTabs = [
    { label: "Hoje", value: "today" },
    { label: "Semana", value: "week" },
  ];

  async function loadTrends(type: "today" | "week") {
    setIsLoadingTrends(true);

    const data =
      type === "today" ? await getTodayMovies() : await getWeekMovies();

    if (data?.results) setTrendMovies(data.results);

    setIsLoadingTrends(false);
  }

  useEffect(() => {
    loadTrends(trendType);
  }, [trendType]);

  console.log("popularMovies", popularMovies);
  console.log("trendMovies", trendMovies);

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
        isLoading={isLoadingPopular}
        movies={popularMovies}
        options={popularTabs}
        onOptionChange={(value) =>
          setPopularType(
            value as "streaming" | "on-tv" | "for-rent" | "in-theatres"
          )
        }
      />

      <MovieSession
        title="Tendências"
        isLoading={isLoadingTrends}
        movies={trendMovies}
        backgroundColor={backgroundcolor}
        options={trendTabs}
        onOptionChange={(value) => setTrendType(value as "today" | "week")}
      />
    </div>
  );
}
