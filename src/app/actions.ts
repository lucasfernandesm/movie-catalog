// 'use server';

import axios from "axios";

export async function getPopularMovies() {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_TMDB_BASE_URL}/movie/popular?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&language=pt-BR&page=1`
    );
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar filmes:", error);
    return null;
  }
}
