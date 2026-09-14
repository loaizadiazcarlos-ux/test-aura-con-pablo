"use client";

import { Button } from "@/components/ui/Button";
import { CountrySelect } from "@/components/site/CountrySelect";

const links = [
  { href: "#menu", label: "Menú" },
  { href: "#combos", label: "Combos" },
  { href: "#como-pedir", label: "Cómo pedir" },
  { href: "#cobertura", label: "Cobertura" },
  { href: "#contacto", label: "Contacto" },
] as const;

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-6 bg-gray-1/90 backdrop-blur-md">
      <div className="smush flex h-4 items-center justify-between gap-2">
        <a href="#inicio" className="flex items-center gap-1 no-underline">
          <span className="size-1.5 rounded-full bg-accent-9" aria-hidden />
          <span className="font-semibold tracking-tight text-gray-12">
            Rest <span className="font-normal text-accent-12">ia</span>
          </span>
        </a>

        <nav className="hidden items-center gap-2 md:flex" aria-label="Principal">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-gray-11 no-underline hover:text-gray-12"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-1">
          <CountrySelect className="hidden w-12 sm:flex" />
          <Button asChild size="sm">
            <a href="#pedir">Pedir ahora</a>
          </Button>
        </div>
      </div>
    </header>
  );
}
