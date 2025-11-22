import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

type MovieCardProps = {
  id: number;
  title: string;
  poster_path: string | null;
  rating: number;
};

export function MovieCard({ id, title, poster_path, rating }: MovieCardProps) {
  const imageUrl = poster_path
    ? `https://image.tmdb.org/t/p/w500${poster_path}`
    : "/no-image.jpg"; // use um placeholder

  return (
    <Link href={`/movie/${id}`}>
      <Card className="overflow-hidden hover:scale-[1.02] transition-all duration-300 cursor-pointer">
        <Image
          src={imageUrl}
          alt={title}
          width={300}
          height={450}
          className="w-full h-[450px] object-cover"
        />

        <CardHeader className="p-3">
          <CardTitle className="text-base line-clamp-1">{title}</CardTitle>
        </CardHeader>

        <CardContent className="p-3 pt-0">
          <p className="text-sm text-muted-foreground">
            ⭐ {rating.toFixed(1)}
          </p>
        </CardContent>
      </Card>
    </Link>
  );
}
