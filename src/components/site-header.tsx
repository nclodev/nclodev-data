import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";

const links = [
  { href: "#layanan", label: "Layanan" },
  { href: "#studio", label: "Studio" },
  { href: "#metode", label: "Metode" },
  { href: "#paket", label: "Paket" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-canvas/92 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="#atas" className="shrink-0" aria-label="NNX beranda">
          <Logo />
        </a>
        <nav className="hidden items-center gap-7 md:flex" aria-label="Utama">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-mist transition-colors duration-150 hover:text-cream"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <div className="hidden md:block">
          <Button asChild size="sm">
            <a href="#brief">Minta brief</a>
          </Button>
        </div>
        <button
          type="button"
          className="inline-flex size-11 items-center justify-center rounded-sm text-cream md:hidden"
          aria-expanded={open}
          aria-label={open ? "Tutup menu" : "Buka menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>
      {open ? (
        <div className="border-t border-line px-4 py-4 md:hidden">
          <nav className="flex flex-col gap-1" aria-label="Mobile">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="flex min-h-11 items-center text-sm text-cream"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </a>
            ))}
            <Button asChild className="mt-2 w-full">
              <a href="#brief" onClick={() => setOpen(false)}>
                Minta brief
              </a>
            </Button>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
