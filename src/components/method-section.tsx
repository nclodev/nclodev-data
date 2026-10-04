import { audiences, steps } from "@/lib/services";

export function MethodSection() {
  return (
    <section id="metode" className="border-t border-line">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="max-w-2xl">
          <p className="font-mono text-[0.7rem] tracking-[0.18em] text-olive uppercase">
            Metode
          </p>
          <h2 className="mt-3 font-display text-3xl tracking-tight text-cream sm:text-4xl">
            Dari brief sampai serah terima, jejaknya bisa diaudit.
          </h2>
        </div>
        <ol className="mt-10 divide-y divide-line border-y border-line">
          {steps.map((s) => (
            <li
              key={s.n}
              className="grid gap-3 py-6 sm:grid-cols-[5.5rem_minmax(0,14rem)_1fr] sm:items-baseline"
            >
              <span className="font-mono text-xs text-olive">{s.n}</span>
              <h3 className="font-display text-xl text-cream">{s.title}</h3>
              <p className="text-sm leading-relaxed text-mist">{s.body}</p>
            </li>
          ))}
        </ol>
        <div className="mt-14">
          <h3 className="font-display text-2xl text-cream">Untuk siapa</h3>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {audiences.map((a) => (
              <article
                key={a.title}
                className="rounded-lg bg-panel p-5 shadow-[0_0_0_1px_var(--color-line)]"
              >
                <h4 className="font-medium text-cream">{a.title}</h4>
                <p className="mt-2 text-sm leading-relaxed text-mist">{a.body}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
