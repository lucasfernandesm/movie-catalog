import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

type MovieCardProps = {
  id: number;
  title: string;
  release_date: string;
  poster_path: string | null;
  rating: number;
};

export function MovieCard({
  id,
  title,
  release_date,
  poster_path,
  rating,
}: MovieCardProps) {
  const imageUrl = poster_path
    ? `https://image.tmdb.org/t/p/w500${poster_path}`
    : "/no-image.jpg"; // use um placeholder

  return (
    <Link href={`/movie/${id}`}>
      <Card className="overflow-hidden hover:scale-[1.04] transition-all duration-300 cursor-pointer p-0 gap-0">
        <Image
          src={imageUrl}
          alt={title}
          width={250}
          height={350}
          className="w-full aspect-2/3 object-cover"
        />

        <CardHeader className="p-0 mt-2 -mb-1 text-center">
          <CardTitle className="text-navbar text-md px-2 line-clamp-1">
            {title}
          </CardTitle>
        </CardHeader>

        <CardContent className="text-center p-3 pt-0">
          <p className="text-sm text-textsecondary">{release_date}</p>
          <p className="text-sm text-textsecondary">⭐ {rating.toFixed(1)}</p>
        </CardContent>
      </Card>
    </Link>
  );
}
