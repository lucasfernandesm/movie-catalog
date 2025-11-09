"use client";

import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { cn } from "@/src/lib/utils";

export function NavBar() {
  const links = [
    { href: "/", label: "Início" },
    { href: "/new", label: "Novos" },
    { href: "/popular", label: "Populares" },
    { href: "/favorites", label: "Favoritos" },
  ];

  return (
    <header className="w-full bg-navbar shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-8 py-3">
        <h1 className="text-xl font-bold text-text">🎬 Filmoteca</h1>

        <NavigationMenu>
          <NavigationMenuList className="flex gap-6">
            {links.map(({ href, label }) => (
              <NavigationMenuItem key={href}>
                <NavigationMenuLink
                  asChild
                  className={cn(
                    "text-text transition-colors text-sm font-medium"
                  )}
                >
                  <Link href={href}>{label}</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </header>
  );
}
