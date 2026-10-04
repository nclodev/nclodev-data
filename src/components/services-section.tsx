import { services } from "@/lib/services";

export function ServicesSection() {
  return (
    <section id="layanan" className="border-t border-line">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="max-w-2xl">
          <p className="font-mono text-[0.7rem] tracking-[0.18em] text-olive uppercase">
            Layanan
          </p>
          <h2 className="mt-3 font-display text-3xl tracking-tight text-cream sm:text-4xl">
            Analisis yang menjawab pertanyaan keputusan, bukan yang memperbanyak grafik.
          </h2>
        </div>
        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <article
              key={s.code}
              className="flex flex-col rounded-lg bg-panel p-5 shadow-[0_0_0_1px_var(--color-line)]"
            >
              <p className="font-mono text-[0.68rem] tracking-[0.14em] text-olive">
                {s.code}
              </p>
              <h3 className="mt-3 font-display text-xl tracking-tight text-cream">
                {s.title}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-mist">{s.body}</p>
              <ul className="mt-4 space-y-1 border-t border-line pt-3">
                {s.deliverables.map((d) => (
                  <li key={d} className="text-xs text-cream/80">
                    {d}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
