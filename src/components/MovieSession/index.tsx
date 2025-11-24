import { Movie } from "@/src/types/movie";
import { MovieCard } from "../MovieCard";
import { Loader } from "lucide-react";
import { cn } from "@/src/lib/utils/utils";

type MovieSessionProps = {
  title: string;
  isLoading: boolean;
  movies: Movie[];
  backgroundColor?: string;
};

export function MovieSession({
  title,
  isLoading,
  movies,
  backgroundColor = "",
}: MovieSessionProps) {
  return (
    <div
      className={cn(
        "relative w-screen left-1/2 right-1/2 ml-[-50vw] mr-[-50vw]",
        backgroundColor
      )}
    >
      <main className="max-w-7xl mx-auto px-6 py-8">
        <h1 className="text-navbar text-2xl font-medium mb-4">{title}</h1>

        <div className="relative min-h-[260px]">
          {isLoading && (
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
              <Loader className="animate-spin text-backgroundsecondary" />
              <p className="text-textsecondary">Carregando filmes...</p>
            </div>
          )}

          {!isLoading && movies.length === 0 && (
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="text-textsecondary">Nenhum filme encontrado.</p>
            </div>
          )}

          <div className="relative">
            <div className="flex gap-4 overflow-x-auto overflow-y-hidden snap-x snap-mandatory pb-8 px-10 rounded-t-xl overflow-hidden">
              {movies.map((movie: Movie) => (
                <div key={movie.id} className="snap-start shrink-0 w-40">
                  <MovieCard
                    id={movie.id}
                    title={movie.title}
                    release_date={movie.release_date}
                    poster_path={movie.poster_path}
                    rating={movie.vote_average}
                  />
                </div>
              ))}
            </div>
            <div
              className="pointer-events-none absolute top-0 right-0 h-full w-20 
          bg-linear-to-l from-background/80 to-transparent"
            />
          </div>
        </div>
      </main>
    </div>
  );
}
