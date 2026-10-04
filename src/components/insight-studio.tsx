import { useMemo, useState } from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { analyzeCsv, demoSets, sampleCsv, type CsvAnalysis, type DemoId } from "@/lib/demo-data";
import { formatNumber } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const tabs: { id: DemoId | "csv"; label: string }[] = [
  { id: "retail", label: "Ritel" },
  { id: "campaign", label: "Digital" },
  { id: "survey", label: "Survei" },
  { id: "csv", label: "Data Anda" },
];

export function InsightStudio() {
  const [tab, setTab] = useState<DemoId | "csv">("retail");
  const [csvText, setCsvText] = useState(sampleCsv);
  const [csvError, setCsvError] = useState<string | null>(null);
  const [csvResult, setCsvResult] = useState<CsvAnalysis | null>(() => {
    try {
      return analyzeCsv(sampleCsv);
    } catch {
      return null;
    }
  });

  const demo = tab === "csv" ? null : demoSets[tab];

  function runCsv() {
    try {
      setCsvResult(analyzeCsv(csvText));
      setCsvError(null);
    } catch (e) {
      setCsvError(e instanceof Error ? e.message : "Gagal membaca CSV.");
      setCsvResult(null);
    }
  }

  function onFile(file: File | undefined) {
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      const text = String(reader.result ?? "");
      setCsvText(text);
      try {
        setCsvResult(analyzeCsv(text));
        setCsvError(null);
      } catch (e) {
        setCsvError(e instanceof Error ? e.message : "Gagal membaca berkas.");
        setCsvResult(null);
      }
    };
    reader.readAsText(file);
  }

  const kpis = tab === "csv" ? csvResult?.kpis : demo?.kpis;
  const findings = tab === "csv" ? csvResult?.findings : demo?.findings;
  const bars = tab === "csv" ? csvResult?.bars : demo?.bars;
  const trend = tab === "csv" ? csvResult?.trend : demo?.trend;
  const trendTitle =
    tab === "csv"
      ? csvResult?.numericName
        ? `Nilai ${csvResult.numericName} (baris awal)`
        : "Pratinjau deret"
      : demo?.trendTitle;
  const barTitle =
    tab === "csv"
      ? csvResult?.categoryName
        ? `Agregasi per ${csvResult.categoryName}`
        : "Distribusi kategori"
      : demo?.barTitle;

  const tooltipStyle = useMemo(
    () => ({
      background: "#efece4",
      border: "1px solid rgb(20 22 19 / 0.12)",
      borderRadius: 8,
      color: "#141613",
      fontSize: 12,
    }),
    [],
  );

  return (
    <section id="studio" className="border-t border-line bg-panel">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="font-mono text-[0.7rem] tracking-[0.18em] text-olive uppercase">
              Studio insight
            </p>
            <h2 className="mt-3 font-display text-3xl tracking-tight text-cream sm:text-4xl">
              Lihat bentuk kerjanya, sebelum Anda mengirim data asli.
            </h2>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-mist">
              Tiga kasus contoh, atau unggah CSV Anda. Pratinjau ini berjalan di
              peramban — berkas tidak dikirim ke server.
            </p>
          </div>
          <div className="flex flex-wrap gap-2" role="tablist" aria-label="Sumber data">
            {tabs.map((t) => (
              <button
                key={t.id}
                type="button"
                role="tab"
                aria-selected={tab === t.id}
                onClick={() => setTab(t.id)}
                className={`h-11 rounded-sm px-3.5 text-sm transition-colors duration-150 ${
                  tab === t.id
                    ? "bg-paper text-ink"
                    : "text-mist shadow-[0_0_0_1px_var(--color-line-strong)] hover:text-cream"
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>

        {tab === "csv" ? (
          <div className="mt-8 rounded-lg bg-canvas p-4 shadow-[0_0_0_1px_var(--color-line)] sm:p-5">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm text-mist">
                Tempel CSV atau unggah berkas. Maksimal 500 baris, 12 kolom.
              </p>
              <label className="inline-flex h-11 cursor-pointer items-center rounded-sm bg-paper px-4 text-sm font-medium text-ink">
                Unggah CSV
                <input
                  type="file"
                  accept=".csv,.tsv,text/csv,text/plain"
                  className="sr-only"
                  onChange={(e) => onFile(e.target.files?.[0])}
                />
              </label>
            </div>
            <textarea
              value={csvText}
              onChange={(e) => setCsvText(e.target.value)}
              spellCheck={false}
              className="mt-3 min-h-32 w-full rounded-md bg-panel px-3 py-2 font-mono text-xs text-cream shadow-[0_0_0_1px_var(--color-line)] focus-visible:outline-none focus-visible:shadow-[0_0_0_2px_var(--color-olive)]"
            />
            <div className="mt-3 flex flex-wrap items-center gap-3">
              <Button onClick={runCsv} size="sm">
                Analisis pratinjau
              </Button>
              {csvError ? <p className="text-sm text-warn">{csvError}</p> : null}
            </div>
          </div>
        ) : (
          <p className="mt-6 text-sm text-mist">{demo?.context}</p>
        )}

        {kpis ? (
          <div className="mt-8 grid grid-cols-2 gap-3 lg:grid-cols-4">
            {kpis.map((k) => (
              <div
                key={k.label}
                className="rounded-md bg-canvas px-4 py-3 shadow-[0_0_0_1px_var(--color-line)]"
              >
                <p className="text-xs text-mist">{k.label}</p>
                <p
                  className={`mt-1 font-display text-2xl tabular-nums tracking-tight ${
                    k.tone === "warn"
                      ? "text-[#d7b4a2]"
                      : k.tone === "ok"
                        ? "text-[#c5d1c3]"
                        : "text-cream"
                  }`}
                >
                  {k.value}
                </p>
                <p className="mt-1 text-[0.7rem] text-mist">{k.hint}</p>
              </div>
            ))}
          </div>
        ) : null}

        <div className="mt-4 grid gap-3 lg:grid-cols-2">
          <figure className="rounded-lg bg-canvas p-4 shadow-[0_0_0_1px_var(--color-line)]">
            <figcaption className="mb-3 text-xs text-mist">{trendTitle}</figcaption>
            <div className="h-56">
              {trend && trend.length ? (
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={trend} margin={{ top: 8, right: 8, left: 0, bottom: 0 }}>
                    <CartesianGrid stroke="rgba(255,255,255,0.06)" vertical={false} />
                    <XAxis dataKey="label" stroke="#9aa094" fontSize={11} tickLine={false} axisLine={false} />
                    <YAxis stroke="#9aa094" fontSize={11} tickLine={false} axisLine={false} width={36} />
                    <Tooltip contentStyle={tooltipStyle} />
                    <Line type="monotone" dataKey="a" stroke="#efece4" strokeWidth={2} dot={false} />
                    {trend.some((p) => p.b !== undefined) ? (
                      <Line type="monotone" dataKey="b" stroke="#7a8774" strokeWidth={2} dot={false} />
                    ) : null}
                  </LineChart>
                </ResponsiveContainer>
              ) : (
                <EmptyChart />
              )}
            </div>
          </figure>
          <figure className="rounded-lg bg-canvas p-4 shadow-[0_0_0_1px_var(--color-line)]">
            <figcaption className="mb-3 text-xs text-mist">{barTitle}</figcaption>
            <div className="h-56">
              {bars && bars.length ? (
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={bars} margin={{ top: 8, right: 8, left: 0, bottom: 0 }}>
                    <CartesianGrid stroke="rgba(255,255,255,0.06)" vertical={false} />
                    <XAxis dataKey="name" stroke="#9aa094" fontSize={11} tickLine={false} axisLine={false} />
                    <YAxis stroke="#9aa094" fontSize={11} tickLine={false} axisLine={false} width={36} />
                    <Tooltip
                      contentStyle={tooltipStyle}
                      formatter={(v: number | string) => formatNumber(Number(v), 1)}
                    />
                    <Bar dataKey="value" fill="#efece4" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              ) : (
                <EmptyChart />
              )}
            </div>
          </figure>
        </div>

        {findings ? (
          <ol className="mt-4 grid gap-3 md:grid-cols-3">
            {findings.map((f, i) => (
              <li
                key={f.title}
                className="rounded-lg bg-paper p-4 text-ink shadow-paper"
              >
                <p className="font-mono text-[0.65rem] tracking-[0.14em] text-olive">
                  Temuan {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-2 font-display text-lg leading-snug tracking-tight">
                  {f.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/70">{f.body}</p>
              </li>
            ))}
          </ol>
        ) : null}

        {tab === "csv" && csvResult ? (
          <div className="mt-4 overflow-x-auto rounded-lg bg-canvas shadow-[0_0_0_1px_var(--color-line)]">
            <table className="min-w-full text-left text-sm">
              <thead className="text-xs text-mist">
                <tr>
                  <th className="px-4 py-3 font-medium">Kolom</th>
                  <th className="px-4 py-3 font-medium">Tipe</th>
                  <th className="px-4 py-3 font-medium">Unik</th>
                  <th className="px-4 py-3 font-medium">Kosong</th>
                  <th className="px-4 py-3 font-medium">Ringkas</th>
                </tr>
              </thead>
              <tbody>
                {csvResult.profiles.map((p) => (
                  <tr key={p.name} className="border-t border-line">
                    <td className="px-4 py-2.5 font-medium text-cream">{p.name}</td>
                    <td className="px-4 py-2.5 text-mist">{p.kind === "number" ? "Angka" : "Teks"}</td>
                    <td className="px-4 py-2.5 tabular-nums text-mist">{p.unique}</td>
                    <td className="px-4 py-2.5 tabular-nums text-mist">{p.missing}</td>
                    <td className="px-4 py-2.5 text-mist">
                      {p.kind === "number"
                        ? `min ${formatNumber(p.min ?? 0, 1)} · max ${formatNumber(p.max ?? 0, 1)}`
                        : p.top?.map((t) => t.value).slice(0, 3).join(", ") || "—"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : null}
      </div>
    </section>
  );
}

function EmptyChart() {
  return (
    <div className="flex h-full items-center justify-center text-sm text-mist">
      Tidak ada deret yang bisa digambar.
    </div>
  );
}
