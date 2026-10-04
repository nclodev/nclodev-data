export type Brief = {
  id: string;
  name: string;
  org: string;
  email: string;
  whatsapp: string;
  kind: string;
  deadline: string;
  message: string;
  createdAt: string;
};

const KEY = "nnx-briefs";

export const briefKinds = [
  "Kinerja bisnis",
  "Analitik digital",
  "Dashboard eksekutif",
  "Riset / statistik",
  "Forecast",
  "Audit data",
  "Belum yakin — bantu tentukan",
] as const;

export function loadBriefs(): Brief[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw) as Brief[];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export function saveBrief(input: Omit<Brief, "id" | "createdAt">): Brief {
  const brief: Brief = {
    ...input,
    id: crypto.randomUUID(),
    createdAt: new Date().toISOString(),
  };
  const next = [brief, ...loadBriefs()].slice(0, 20);
  localStorage.setItem(KEY, JSON.stringify(next));
  return brief;
}
