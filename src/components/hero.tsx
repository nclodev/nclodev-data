import { ArrowDownRight, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const findings = [
  { tag: "01", text: "Care tumbuh volume, tapi menyumbang 61% retur." },
  { tag: "02", text: "Margin Sumatera 36% — 8 poin di atas Jawa." },
  { tag: "03", text: "24 SKU ekor bisa dipotong tanpa menyentuh 80% omzet." },
];

export function Hero() {
  return (
    <section id="atas" className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 hero-glow" />
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16 lg:py-20">
        <div className="stagger-in max-w-xl">
          <p className="font-mono text-[0.7rem] tracking-[0.18em] text-olive uppercase">
            NNX · Data & Digital Insight
          </p>
          <h1 className="mt-5 font-display text-[2.35rem] leading-[1.12] tracking-tight text-cream sm:text-5xl lg:text-[3.35rem]">
            Jasa analisis data yang mengubah angka menjadi keputusan.
          </h1>
          <p className="mt-5 max-w-lg text-base leading-relaxed text-mist">
            Kami merapikan data bisnis, digital, dan riset Anda — lalu
            mengembalikannya sebagai temuan, rekomendasi, dan dashboard yang
            siap dibawa ke rapat. Bukan tumpukan chart. Bukan Excel yang hanya
            Anda yang mengerti.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg">
              <a href="#brief">
                Minta brief analisis
                <ArrowRight className="size-4" />
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="#studio">
                Coba studio insight
                <ArrowDownRight className="size-4" />
              </a>
            </Button>
          </div>
          <dl className="mt-10 grid grid-cols-3 gap-4 border-t border-line pt-6">
            {[
              ["5 hari", "Diagnostik pertama"],
              ["3 lapisan", "Temuan · saran · alat"],
              ["Satu sumber", "Angka yang bisa diaudit"],
            ].map(([k, v]) => (
              <div key={k}>
                <dt className="font-display text-xl text-cream sm:text-2xl">{k}</dt>
                <dd className="mt-1 text-xs leading-snug text-mist">{v}</dd>
              </div>
            ))}
          </dl>
        </div>

        <article className="hero-rise rounded-xl bg-paper p-4 text-ink shadow-paper sm:p-5">
          <div className="rounded-lg bg-cream px-4 py-4">
            <div className="flex items-center justify-between gap-3">
              <p className="font-mono text-[0.65rem] tracking-[0.16em] text-olive uppercase">
                Laporan insight · Q3
              </p>
              <p className="font-mono text-[0.65rem] text-ink/45">NNX / 08.10</p>
            </div>
            <h2 className="mt-3 font-display text-2xl leading-tight tracking-tight">
              Omzet naik, margin tidak ikut.
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-ink/65">
              Ringkasan eksekutif untuk ritel fiktif — contoh deliverable, bukan
              klien nyata.
            </p>
            <div className="mt-5 grid grid-cols-3 gap-2">
              {[
                ["+8,4%", "Omzet"],
                ["−1,1 pt", "Margin"],
                ["12,4%", "Retur"],
              ].map(([n, l]) => (
                <div
                  key={l}
                  className="rounded-md bg-paper-deep px-2.5 py-2.5"
                >
                  <p className="font-mono text-sm tabular-nums">{n}</p>
                  <p className="mt-0.5 text-[0.7rem] text-ink/50">{l}</p>
                </div>
              ))}
            </div>
            <ol className="mt-5 space-y-3 border-t border-ink-line pt-4">
              {findings.map((f) => (
                <li key={f.tag} className="flex gap-3 text-sm leading-snug">
                  <span className="font-mono text-[0.65rem] text-olive">{f.tag}</span>
                  <span>{f.text}</span>
                </li>
              ))}
            </ol>
          </div>
        </article>
      </div>
    </section>
  );
}
