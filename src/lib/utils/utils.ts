import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const imageUrl = (path: string | null | undefined, size = "w500") => {
  if (!path) return "/placeholder-poster.png"; // coloque um placeholder em public/
  return `${process.env.NEXT_PUBLIC_TMDB_IMAGE_BASE}/${size}${path}`;
};

export function formatVote(v: number) {
  return v ? v.toFixed(1) : "—";
}
