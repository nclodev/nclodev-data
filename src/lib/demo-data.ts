export type DemoId = "retail" | "campaign" | "survey";

export type Kpi = {
  label: string;
  value: string;
  hint: string;
  tone?: "ok" | "warn" | "neutral";
};

export type InsightPoint = {
  title: string;
  body: string;
};

export type SeriesPoint = {
  label: string;
  a: number;
  b?: number;
};

export type BarPoint = {
  name: string;
  value: number;
};

export type DemoSet = {
  id: DemoId;
  title: string;
  context: string;
  kpis: Kpi[];
  trend: SeriesPoint[];
  bars: BarPoint[];
  trendTitle: string;
  barTitle: string;
  findings: InsightPoint[];
};

const retailTrend: SeriesPoint[] = [
  { label: "Mei", a: 1820, b: 410 },
  { label: "Jun", a: 1910, b: 390 },
  { label: "Jul", a: 1760, b: 470 },
  { label: "Agu", a: 2040, b: 430 },
  { label: "Sep", a: 2180, b: 455 },
  { label: "Okt", a: 2090, b: 520 },
];

export const demoSets: Record<DemoId, DemoSet> = {
  retail: {
    id: "retail",
    title: "Penjualan ritel 6 bulan",
    context: "Contoh: omzet vs retur, 4 kategori, 3 wilayah.",
    kpis: [
      { label: "Omzet", value: "Rp 11,8 M", hint: "+8,4% vs semester lalu", tone: "ok" },
      { label: "Margin kotor", value: "31,2%", hint: "Turun 1,1 pt", tone: "warn" },
      { label: "Retur", value: "12,4%", hint: "Tertinggi di kategori Care", tone: "warn" },
      { label: "SKU hidup", value: "18 / 42", hint: "43% SKU menopang 81% omzet", tone: "neutral" },
    ],
    trend: retailTrend,
    bars: [
      { name: "Jawa", value: 54 },
      { name: "Sumatera", value: 27 },
      { name: "Bali–Nusra", value: 19 },
    ],
    trendTitle: "Omzet vs retur (juta Rp)",
    barTitle: "Kontribusi omzet per wilayah (%)",
    findings: [
      {
        title: "Care menekan margin, bukan volume",
        body: "Kategori Care tumbuh 14% volume tapi menyumbang 61% retur. Promo bundling di Juli berkorelasi dengan lonjakan komplain ukuran.",
      },
      {
        title: "Jawa masih mesin kas, Sumatera lebih sehat",
        body: "Margin Sumatera 36% vs Jawa 28%. Diskon kanal modern trade di Jawa belum diuji ulang sejak Q1.",
      },
      {
        title: "Potong ekor SKU, jangan tambah katalog",
        body: "24 SKU di bawah ambang 0,6% kontribusi. Membersihkan ekor ini menghemat ~9% biaya stok tanpa menyentuh 80% omzet.",
      },
    ],
  },
  campaign: {
    id: "campaign",
    title: "Funnel kampanye digital",
    context: "Contoh: spend, CTR, CVR, CAC lintas 4 kanal.",
    kpis: [
      { label: "Spend", value: "Rp 420 jt", hint: "30 hari terakhir", tone: "neutral" },
      { label: "CAC blended", value: "Rp 186 rb", hint: "Target 150 rb", tone: "warn" },
      { label: "CVR landing", value: "2,1%", hint: "Meta 3,4% · TikTok 0,9%", tone: "ok" },
      { label: "LTV 90 hari", value: "Rp 410 rb", hint: "Payback 2,2 bulan", tone: "ok" },
    ],
    trend: [
      { label: "M1", a: 92, b: 168 },
      { label: "M2", a: 104, b: 172 },
      { label: "M3", a: 118, b: 181 },
      { label: "M4", a: 96, b: 190 },
    ],
    bars: [
      { name: "Meta", value: 34 },
      { name: "Google", value: 29 },
      { name: "TikTok", value: 22 },
      { name: "CRM", value: 15 },
    ],
    trendTitle: "Leads vs CAC (ribu Rp)",
    barTitle: "Share spend per kanal (%)",
    findings: [
      {
        title: "TikTok mahal di akuisisi, lemah di retensi",
        body: "CAC TikTok Rp 248 rb dengan repeat 11%. Meta repeat 29%. Anggaran kreatif short-form tidak diikat ke katalog retensi.",
      },
      {
        title: "Landing mobile kalah 1,6 detik",
        body: "LCP 4,1s di 4G. Percobaan salin hero yang lebih pendek menaikkan CVR 18% di sampel 9 hari — belum di-rollout.",
      },
      {
        title: "CRM adalah kanal tersembunyi",
        body: "15% spend, 31% revenue. Frequency cap email terlalu longgar; cohort minggu ke-3 sudah saturasi.",
      },
    ],
  },
  survey: {
    id: "survey",
    title: "Survei kepuasan pelanggan",
    context: "Contoh: NPS, driver, n = 842, 3 segmen.",
    kpis: [
      { label: "NPS", value: "32", hint: "Promoter 48% · Detractor 16%", tone: "ok" },
      { label: "CSAT", value: "4,1 / 5", hint: "Turun 0,3 di pengiriman", tone: "warn" },
      { label: "Respon", value: "38%", hint: "n = 842 dari 2.210", tone: "neutral" },
      { label: "Top driver", value: "Janji tiba", hint: "β = 0,41 pada regresi", tone: "ok" },
    ],
    trend: [
      { label: "Q1", a: 28, b: 4.3 },
      { label: "Q2", a: 35, b: 4.4 },
      { label: "Q3", a: 31, b: 4.2 },
      { label: "Q4", a: 32, b: 4.1 },
    ],
    bars: [
      { name: "Janji tiba", value: 41 },
      { name: "Respon CS", value: 22 },
      { name: "Harga", value: 18 },
      { name: "Produk", value: 12 },
      { name: "Aplikasi", value: 7 },
    ],
    trendTitle: "NPS kuartalan",
    barTitle: "Kontribusi driver terhadap NPS (bobot)",
    findings: [
      {
        title: "Pengiriman, bukan harga, yang memecah NPS",
        body: "Regresi ordinal: janji tiba (β 0,41) jauh di atas harga (β 0,12). Diskon tidak menutup luka keterlambatan >1 hari.",
      },
      {
        title: "Segmen korporat diam-diam detractor",
        body: "NPS B2B −4 vs B2C +41. Akar: SLA tiket 18 jam vs janji 4 jam di kontrak.",
      },
      {
        title: "Aplikasi tidak urgensi Q1",
        body: "Keluhan UI 7% dan tidak signifikan (p = 0,21). Roadmap fitur bisa mundur; budget lebih baik ke operasi last-mile.",
      },
    ],
  },
};

export type ColumnProfile = {
  name: string;
  kind: "number" | "text";
  missing: number;
  unique: number;
  min?: number;
  max?: number;
  mean?: number;
  top?: { value: string; count: number }[];
};

export type CsvAnalysis = {
  rows: number;
  columns: number;
  profiles: ColumnProfile[];
  bars: BarPoint[];
  trend: SeriesPoint[];
  findings: InsightPoint[];
  kpis: Kpi[];
  numericName?: string;
  categoryName?: string;
};

function splitCsv(text: string): string[][] {
  const rows: string[][] = [];
  let row: string[] = [];
  let cell = "";
  let inQuotes = false;
  const src = text.replace(/^\uFEFF/, "");
  for (let i = 0; i < src.length; i += 1) {
    const ch = src[i];
    const next = src[i + 1];
    if (inQuotes) {
      if (ch === '"' && next === '"') {
        cell += '"';
        i += 1;
      } else if (ch === '"') {
        inQuotes = false;
      } else {
        cell += ch;
      }
    } else if (ch === '"') {
      inQuotes = true;
    } else if (ch === "," || ch === ";" || ch === "\t") {
      row.push(cell.trim());
      cell = "";
    } else if (ch === "\n") {
      row.push(cell.trim());
      cell = "";
      if (row.some((c) => c.length > 0)) rows.push(row);
      row = [];
    } else if (ch !== "\r") {
      cell += ch;
    }
  }
  row.push(cell.trim());
  if (row.some((c) => c.length > 0)) rows.push(row);
  return rows;
}

function toNumber(raw: string): number | null {
  if (!raw) return null;
  const cleaned = raw.replace(/\s/g, "").replace(/%$/, "");
  const normalized = cleaned.includes(",") && !cleaned.includes(".")
    ? cleaned.replace(/\./g, "").replace(",", ".")
    : cleaned.replace(/,/g, "");
  if (!/^-?\d+(\.\d+)?$/.test(normalized)) return null;
  const n = Number(normalized);
  return Number.isFinite(n) ? n : null;
}

export function analyzeCsv(text: string): CsvAnalysis {
  const table = splitCsv(text).slice(0, 501);
  if (table.length < 2) {
    throw new Error("CSV perlu header dan minimal satu baris data.");
  }
  const headers = table[0].map((h, i) => h || `kolom_${i + 1}`).slice(0, 12);
  const body = table.slice(1, 501).map((r) => r.slice(0, headers.length));
  const cols = headers.map((name, idx) => body.map((r) => r[idx] ?? ""));

  const profiles: ColumnProfile[] = headers.map((name, idx) => {
    const values = cols[idx];
    const missing = values.filter((v) => v === "").length;
    const numericHits = values.map(toNumber);
    const nums = numericHits.filter((v): v is number => v !== null);
    const isNum = nums.length >= Math.max(3, values.length * 0.6);
    const unique = new Set(values.filter(Boolean)).size;
    if (isNum) {
      const sum = nums.reduce((a, b) => a + b, 0);
      return {
        name,
        kind: "number",
        missing,
        unique,
        min: Math.min(...nums),
        max: Math.max(...nums),
        mean: sum / nums.length,
      };
    }
    const counts = new Map<string, number>();
    for (const v of values) {
      if (!v) continue;
      counts.set(v, (counts.get(v) ?? 0) + 1);
    }
    const top = [...counts.entries()]
      .sort((a, b) => b[1] - a[1])
      .slice(0, 5)
      .map(([value, count]) => ({ value, count }));
    return { name, kind: "text", missing, unique, top };
  });

  const numeric = profiles.find((p) => p.kind === "number");
  const category = profiles.find((p) => p.kind === "text" && (p.top?.length ?? 0) > 1);
  const numericIdx = numeric ? headers.indexOf(numeric.name) : -1;
  const catIdx = category ? headers.indexOf(category.name) : -1;

  let bars: BarPoint[] = [];
  if (category && numeric && catIdx >= 0 && numericIdx >= 0) {
    const acc = new Map<string, number>();
    for (const r of body) {
      const key = r[catIdx] || "(kosong)";
      const n = toNumber(r[numericIdx]) ?? 0;
      acc.set(key, (acc.get(key) ?? 0) + n);
    }
    bars = [...acc.entries()]
      .sort((a, b) => b[1] - a[1])
      .slice(0, 6)
      .map(([name, value]) => ({ name, value: Math.round(value * 100) / 100 }));
  } else if (category?.top) {
    bars = category.top.map((t) => ({ name: t.value, value: t.count }));
  }

  const trend: SeriesPoint[] = numeric && numericIdx >= 0
    ? body.slice(0, 12).map((r, i) => ({
        label: String(i + 1),
        a: toNumber(r[numericIdx]) ?? 0,
      }))
    : body.slice(0, 8).map((_, i) => ({ label: String(i + 1), a: 0 }));

  const missingTotal = profiles.reduce((a, p) => a + p.missing, 0);
  const missingPct = body.length ? (missingTotal / (body.length * profiles.length)) * 100 : 0;
  const findings: InsightPoint[] = [
    {
      title: numeric
        ? `${numeric.name} adalah kolom angka utama`
        : "Tidak ada kolom angka yang cukup bersih",
      body: numeric
        ? `Rata-rata ${formatPlain(numeric.mean ?? 0)}, rentang ${formatPlain(numeric.min ?? 0)} – ${formatPlain(numeric.max ?? 0)}. Ini kandidat metrik utama laporan.`
        : "Kami akan menstandarkan format angka (koma/titik, persen, mata uang) sebelum analisis penuh.",
    },
    {
      title: missingPct > 8 ? "Kualitas data perlu dibersihkan dulu" : "Kelengkapan data relatif baik",
      body: `${missingPct.toFixed(1)}% sel kosong dari ${body.length} baris × ${profiles.length} kolom. ${
        missingPct > 8
          ? "Audit cleansing disarankan sebelum dashboard."
          : "Cukup untuk diagnostik cepat."
      }`,
    },
    {
      title: category
        ? `Segmen terkuat: ${category.top?.[0]?.value ?? "—"}`
        : "Belum ada kolom kategori yang jelas",
      body: category
        ? `Kolom ${category.name} punya ${category.unique} nilai unik. Ini bisa jadi sumbu breakdown wilayah, kanal, atau segmen.`
        : "Tambahkan kolom dimensi (wilayah, kanal, periode) agar insight bisa ditindaklanjuti.",
    },
  ];

  return {
    rows: body.length,
    columns: profiles.length,
    profiles,
    bars,
    trend,
    findings,
    numericName: numeric?.name,
    categoryName: category?.name,
    kpis: [
      { label: "Baris", value: String(body.length), hint: "Dipotong di 500 untuk pratinjau", tone: "neutral" },
      { label: "Kolom", value: String(profiles.length), hint: "Maks 12 kolom dibaca", tone: "neutral" },
      {
        label: "Kosong",
        value: `${missingPct.toFixed(1)}%`,
        hint: "Sel tanpa nilai",
        tone: missingPct > 8 ? "warn" : "ok",
      },
      {
        label: "Metrik",
        value: numeric?.name ?? "—",
        hint: category ? `dipecah by ${category.name}` : "belum ada dimensi",
        tone: numeric ? "ok" : "warn",
      },
    ],
  };
}

function formatPlain(n: number) {
  return new Intl.NumberFormat("id-ID", { maximumFractionDigits: 2 }).format(n);
}

export const sampleCsv = `bulan,wilayah,kanal,omzet,retur
Mei,Jawa,Modern,820,90
Mei,Sumatera,Tradisional,310,22
Jun,Jawa,Modern,860,88
Jun,Sumatera,Tradisional,340,19
Jul,Jawa,Modern,790,120
Jul,Bali,Online,210,18
Agu,Jawa,Modern,910,95
Agu,Sumatera,Tradisional,380,21
Sep,Jawa,Online,470,40
Sep,Bali,Online,240,16
Okt,Jawa,Modern,880,110
Okt,Sumatera,Tradisional,400,24
`;
