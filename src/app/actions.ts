// 'use server';

import axios from "axios";

export async function getPopularMovies(
  type: "streaming" | "on-tv" | "for-rent" | "in-theatres"
) {
  const base = "https://api.themoviedb.org/3";
  const apiKey = process.env.NEXT_PUBLIC_TMDB_API_KEY;

  const endpoints: Record<string, string> = {
    streaming: `${base}/discover/movie?with_watch_monetization_types=flatrate`,
    "for-rent": `${base}/discover/movie?with_watch_monetization_types=rent`,
    "in-theatres": `${base}/discover/movie?with_release_type=2|3&region=BR`,
    "on-tv": `${base}/discover/tv?with_watch_monetization_types=flatrate`,
  };

  const url = `${endpoints[type]}&api_key=${apiKey}&language=pt-BR&page=1`;

  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar filmes populares:", error);
    return null;
  }
}

export async function getTodayMovies() {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/trending/movie/day?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&language=pt`
    );
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar filmes:", error);
    return null;
  }
}

export async function getWeekMovies() {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/trending/movie/week?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&language=pt`
    );
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar filmes:", error);
    return null;
  }
}
