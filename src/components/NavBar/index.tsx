"use client";

import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { cn } from "@/src/lib/utils/utils";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export function NavBar() {
  const [open, setOpen] = useState(false);

  const pathname = usePathname();

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

        <div className="flex items-center gap-4">
          <Button
            className="md:hidden text-text bg-transparent"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </Button>

          {/* Menu Desktop */}
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList className="flex gap-6">
              {links.map(({ href, label }) => (
                <NavigationMenuItem key={href}>
                  <NavigationMenuLink
                    asChild
                    className={cn(
                      "text-text transition-colors text-sm font-medium hover:bg-white/10 hover:text-text focus:bg-white/10 focus:text-text",
                      pathname === href ? "bg-white/10" : ""
                    )}
                  >
                    <Link href={href}>{label}</Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>

      {/* Menu Mobile */}
      {open && (
        <div className="md:hidden bg-navbar border-t border-white/10">
          <nav className="flex flex-col px-8 py-3 gap-4">
            {links.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className="text-text text-sm font-medium active:bg-white/10 transition-colors py-2 px-2 rounded-md"
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
