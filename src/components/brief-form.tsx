import { type FormEvent, type ReactNode, useMemo, useState } from "react";
import { Check } from "lucide-react";
import { briefKinds, saveBrief } from "@/lib/briefs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

type Status = "idle" | "done" | "error";

export function BriefForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [ref, setRef] = useState("");
  const year = useMemo(() => new Date().getFullYear(), []);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();
    if (!name || !email || !message) {
      setStatus("error");
      return;
    }
    const saved = saveBrief({
      name,
      org: String(data.get("org") ?? "").trim(),
      email,
      whatsapp: String(data.get("whatsapp") ?? "").trim(),
      kind: String(data.get("kind") ?? ""),
      deadline: String(data.get("deadline") ?? ""),
      message,
    });
    setRef(saved.id.slice(0, 8).toUpperCase());
    setStatus("done");
    e.currentTarget.reset();
  }

  return (
    <section id="brief" className="border-t border-line">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="font-mono text-[0.7rem] tracking-[0.18em] text-olive uppercase">
            Brief
          </p>
          <h2 className="mt-3 font-display text-3xl tracking-tight text-cream sm:text-4xl">
            Kirim pertanyaan keputusannya. Kami balas dengan ruang lingkup.
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-mist">
            Tidak perlu data lengkap di tahap ini. Cukup jelaskan apa yang ingin
            Anda putuskan, sumber datanya, dan kapan hasilnya dibutuhkan. Kami
            membalas dengan usulan metode, jadwal, dan estimasi.
          </p>
          <ul className="mt-6 space-y-2 text-sm text-mist">
            <li>Data klien tidak dipakai untuk studi kasus publik.</li>
            <li>File kerja dan kamus data diserahkan di akhir proyek.</li>
            <li>Revisi lingkup disepakati tertulis sebelum analisis penuh.</li>
          </ul>
        </div>

        {status === "done" ? (
          <div className="rounded-xl bg-paper p-6 text-ink shadow-paper sm:p-8">
            <span className="inline-flex size-10 items-center justify-center rounded-sm bg-ink text-paper">
              <Check className="size-5" />
            </span>
            <h3 className="mt-4 font-display text-2xl tracking-tight">
              Brief diterima.
            </h3>
            <p className="mt-2 font-mono text-xs tracking-[0.12em] text-olive uppercase">
              Ref {ref} · {year}
            </p>
            <ol className="mt-5 space-y-3 text-sm leading-relaxed text-ink/75">
              <li>1. Kami baca pertanyaan keputusan dan sumber data.</li>
              <li>2. Dalam 1–2 hari kerja kami kirim usulan lingkup.</li>
              <li>3. Setelah disepakati, audit data dimulai.</li>
            </ol>
            <Button
              variant="ink"
              className="mt-6"
              onClick={() => setStatus("idle")}
            >
              Kirim brief lain
            </Button>
          </div>
        ) : (
          <form
            onSubmit={onSubmit}
            className="rounded-xl bg-paper p-5 text-ink shadow-paper sm:p-7"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Nama" htmlFor="name">
                <Input id="name" name="name" required autoComplete="name" />
              </Field>
              <Field label="Perusahaan / institusi" htmlFor="org">
                <Input id="org" name="org" autoComplete="organization" />
              </Field>
              <Field label="Email" htmlFor="email">
                <Input id="email" name="email" type="email" required autoComplete="email" />
              </Field>
              <Field label="WhatsApp" htmlFor="whatsapp">
                <Input id="whatsapp" name="whatsapp" inputMode="tel" autoComplete="tel" />
              </Field>
              <Field label="Jenis analisis" htmlFor="kind">
                <select
                  id="kind"
                  name="kind"
                  defaultValue={briefKinds[6]}
                  className="h-11 w-full rounded-md bg-paper px-3.5 text-sm text-ink shadow-[0_0_0_1px_var(--color-ink-line)] focus-visible:outline-none focus-visible:shadow-[0_0_0_2px_var(--color-olive)]"
                >
                  {briefKinds.map((k) => (
                    <option key={k} value={k}>
                      {k}
                    </option>
                  ))}
                </select>
              </Field>
              <Field label="Deadline (opsional)" htmlFor="deadline">
                <Input id="deadline" name="deadline" placeholder="Mis. 24 Oktober" />
              </Field>
            </div>
            <Field label="Pertanyaan keputusan & sumber data" htmlFor="message" className="mt-4">
              <Textarea
                id="message"
                name="message"
                required
                placeholder="Contoh: Kami ingin tahu SKU mana yang merugikan margin di Jawa, data dari ERP + retur 12 bulan."
              />
            </Field>
            {status === "error" ? (
              <p className="mt-3 text-sm text-warn">Lengkapi nama, email, dan ringkasan brief.</p>
            ) : null}
            <Button type="submit" variant="ink" size="lg" className="mt-5 w-full sm:w-auto">
              Kirim brief
            </Button>
          </form>
        )}
      </div>
    </section>
  );
}

function Field({
  label,
  htmlFor,
  children,
  className,
}: {
  label: string;
  htmlFor: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`grid gap-1.5 ${className ?? ""}`}>
      <Label htmlFor={htmlFor}>{label}</Label>
      {children}
    </div>
  );
}
