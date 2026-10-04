import { Logo } from "@/components/logo";

export function SiteFooter() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-10 sm:px-6 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <Logo />
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-mist">
            NNX mengubah Data & Digital Insight menjadi jasa analisis data:
            audit, temuan, rekomendasi, dan dashboard yang bisa dipertanggungjawabkan.
          </p>
        </div>
        <p className="font-mono text-[0.7rem] tracking-[0.12em] text-mist uppercase">
          Jakarta · Analisis, bukan ornamentasi
        </p>
      </div>
    </footer>
  );
}
