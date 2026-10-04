import { packages } from "@/lib/services";
import { Button } from "@/components/ui/button";

export function PackagesSection() {
  return (
    <section id="paket" className="border-t border-line bg-panel">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="max-w-2xl">
          <p className="font-mono text-[0.7rem] tracking-[0.18em] text-olive uppercase">
            Paket
          </p>
          <h2 className="mt-3 font-display text-3xl tracking-tight text-cream sm:text-4xl">
            Lingkup jelas. Harga mulai. Isi disesuaikan brief.
          </h2>
        </div>
        <div className="mt-10 grid gap-3 lg:grid-cols-3">
          {packages.map((p) => (
            <article
              key={p.name}
              className={`flex flex-col rounded-lg p-6 ${
                p.featured
                  ? "bg-paper text-ink shadow-paper"
                  : "bg-canvas text-cream shadow-[0_0_0_1px_var(--color-line)]"
              }`}
            >
              <p
                className={`font-mono text-[0.65rem] tracking-[0.16em] uppercase ${
                  p.featured ? "text-olive" : "text-olive"
                }`}
              >
                {p.time}
              </p>
              <h3 className="mt-2 font-display text-2xl tracking-tight">{p.name}</h3>
              <p className={`mt-1 text-sm ${p.featured ? "text-ink/60" : "text-mist"}`}>
                {p.from}
              </p>
              <ul className="mt-5 flex-1 space-y-2 text-sm">
                {p.points.map((pt) => (
                  <li key={pt} className={p.featured ? "text-ink/80" : "text-mist"}>
                    {pt}
                  </li>
                ))}
              </ul>
              <Button
                asChild
                className="mt-6 w-full"
                variant={p.featured ? "ink" : "primary"}
              >
                <a href="#brief">Ajukan paket ini</a>
              </Button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
