"use client";

export function Footer() {
  return (
    <footer className="bg-navbar text-text text-xs py-2">
      <div className="max-w-6xl mx-auto text-center">
        <p>
          Desenvolvido por{" "}
          <span className="font-semibold">Lucas Fernandes</span>
        </p>
        <p>© {new Date().getFullYear()} Filmoteca</p>
      </div>
    </footer>
  );
}
