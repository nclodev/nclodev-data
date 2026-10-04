import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as ArrowRight, i as Check, o as ArrowDownRight, r as Menu, t as X } from "../_libs/lucide-react.mjs";
import { t as Slot } from "../_libs/radix-ui__react-slot.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { a as Line, c as ResponsiveContainer, i as XAxis, l as Tooltip, n as LineChart, o as CartesianGrid, r as YAxis, s as Bar, t as BarChart } from "../_libs/recharts+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-brwNObje.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var KEY = "nnx-briefs";
var briefKinds = [
	"Kinerja bisnis",
	"Analitik digital",
	"Dashboard eksekutif",
	"Riset / statistik",
	"Forecast",
	"Audit data",
	"Belum yakin — bantu tentukan"
];
function loadBriefs() {
	if (typeof window === "undefined") return [];
	try {
		const raw = localStorage.getItem(KEY);
		if (!raw) return [];
		const parsed = JSON.parse(raw);
		return Array.isArray(parsed) ? parsed : [];
	} catch {
		return [];
	}
}
function saveBrief(input) {
	const brief = {
		...input,
		id: crypto.randomUUID(),
		createdAt: (/* @__PURE__ */ new Date()).toISOString()
	};
	const next = [brief, ...loadBriefs()].slice(0, 20);
	localStorage.setItem(KEY, JSON.stringify(next));
	return brief;
}
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
function formatNumber(value, digits = 0) {
	return new Intl.NumberFormat("id-ID", {
		maximumFractionDigits: digits,
		minimumFractionDigits: digits
	}).format(value);
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 font-medium transition-[background-color,color,box-shadow,transform,opacity] duration-150 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-olive/70 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:not-disabled:scale-[0.96]", {
	variants: {
		variant: {
			primary: "bg-paper text-ink ring-offset-canvas hover:bg-cream",
			ink: "bg-ink text-paper ring-offset-paper hover:bg-canvas",
			ghost: "bg-transparent text-cream ring-offset-canvas hover:bg-panel-2",
			outline: "bg-transparent text-cream shadow-[0_0_0_1px_var(--color-line-strong)] ring-offset-canvas hover:bg-panel",
			paperGhost: "bg-transparent text-ink shadow-[0_0_0_1px_var(--color-ink-line)] ring-offset-paper hover:bg-paper-deep"
		},
		size: {
			sm: "h-10 rounded-sm px-3.5 text-sm",
			md: "h-11 rounded-md px-4 text-sm",
			lg: "h-12 rounded-md px-5 text-[0.9375rem]"
		}
	},
	defaultVariants: {
		variant: "primary",
		size: "md"
	}
});
function Button({ className, variant, size, asChild, type = "button", ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		...!asChild ? { type } : {},
		className: cn(buttonVariants({
			variant,
			size
		}), className),
		...props
	});
}
function Input({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		className: cn("h-11 w-full rounded-md bg-paper px-3.5 text-sm text-ink shadow-[0_0_0_1px_var(--color-ink-line)] placeholder:text-ink/40", "transition-[box-shadow] duration-150 ease-out", "focus-visible:outline-none focus-visible:shadow-[0_0_0_2px_var(--color-olive)]", className),
		...props
	});
}
function Label({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
		className: cn("text-sm font-medium text-ink/80", className),
		...props
	});
}
function Textarea({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
		className: cn("min-h-32 w-full rounded-lg bg-paper px-3.5 py-3 text-sm text-ink shadow-[0_0_0_1px_var(--color-ink-line)] placeholder:text-ink/40", "transition-[box-shadow] duration-150 ease-out", "focus-visible:outline-none focus-visible:shadow-[0_0_0_2px_var(--color-olive)]", className),
		...props
	});
}
function BriefForm() {
	const [status, setStatus] = (0, import_react.useState)("idle");
	const [ref, setRef] = (0, import_react.useState)("");
	const year = (0, import_react.useMemo)(() => (/* @__PURE__ */ new Date()).getFullYear(), []);
	function onSubmit(e) {
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
			message
		});
		setRef(saved.id.slice(0, 8).toUpperCase());
		setStatus("done");
		e.currentTarget.reset();
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "brief",
		className: "border-t border-line",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-[0.9fr_1.1fr]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-mono text-[0.7rem] tracking-[0.18em] text-olive uppercase",
					children: "Brief"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-3 font-display text-3xl tracking-tight text-cream sm:text-4xl",
					children: "Kirim pertanyaan keputusannya. Kami balas dengan ruang lingkup."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-sm leading-relaxed text-mist",
					children: "Tidak perlu data lengkap di tahap ini. Cukup jelaskan apa yang ingin Anda putuskan, sumber datanya, dan kapan hasilnya dibutuhkan. Kami membalas dengan usulan metode, jadwal, dan estimasi."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "mt-6 space-y-2 text-sm text-mist",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Data klien tidak dipakai untuk studi kasus publik." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "File kerja dan kamus data diserahkan di akhir proyek." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Revisi lingkup disepakati tertulis sebelum analisis penuh." })
					]
				})
			] }), status === "done" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-xl bg-paper p-6 text-ink shadow-paper sm:p-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "inline-flex size-10 items-center justify-center rounded-sm bg-ink text-paper",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-5" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mt-4 font-display text-2xl tracking-tight",
						children: "Brief diterima."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-2 font-mono text-xs tracking-[0.12em] text-olive uppercase",
						children: [
							"Ref ",
							ref,
							" · ",
							year
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ol", {
						className: "mt-5 space-y-3 text-sm leading-relaxed text-ink/75",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "1. Kami baca pertanyaan keputusan dan sumber data." }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "2. Dalam 1–2 hari kerja kami kirim usulan lingkup." }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "3. Setelah disepakati, audit data dimulai." })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "ink",
						className: "mt-6",
						onClick: () => setStatus("idle"),
						children: "Kirim brief lain"
					})
				]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				onSubmit,
				className: "rounded-xl bg-paper p-5 text-ink shadow-paper sm:p-7",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-4 sm:grid-cols-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Nama",
								htmlFor: "name",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									id: "name",
									name: "name",
									required: true,
									autoComplete: "name"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Perusahaan / institusi",
								htmlFor: "org",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									id: "org",
									name: "org",
									autoComplete: "organization"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Email",
								htmlFor: "email",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									id: "email",
									name: "email",
									type: "email",
									required: true,
									autoComplete: "email"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "WhatsApp",
								htmlFor: "whatsapp",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									id: "whatsapp",
									name: "whatsapp",
									inputMode: "tel",
									autoComplete: "tel"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Jenis analisis",
								htmlFor: "kind",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
									id: "kind",
									name: "kind",
									defaultValue: briefKinds[6],
									className: "h-11 w-full rounded-md bg-paper px-3.5 text-sm text-ink shadow-[0_0_0_1px_var(--color-ink-line)] focus-visible:outline-none focus-visible:shadow-[0_0_0_2px_var(--color-olive)]",
									children: briefKinds.map((k) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: k,
										children: k
									}, k))
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Deadline (opsional)",
								htmlFor: "deadline",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									id: "deadline",
									name: "deadline",
									placeholder: "Mis. 24 Oktober"
								})
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Pertanyaan keputusan & sumber data",
						htmlFor: "message",
						className: "mt-4",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
							id: "message",
							name: "message",
							required: true,
							placeholder: "Contoh: Kami ingin tahu SKU mana yang merugikan margin di Jawa, data dari ERP + retur 12 bulan."
						})
					}),
					status === "error" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-sm text-warn",
						children: "Lengkapi nama, email, dan ringkasan brief."
					}) : null,
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						type: "submit",
						variant: "ink",
						size: "lg",
						className: "mt-5 w-full sm:w-auto",
						children: "Kirim brief"
					})
				]
			})]
		})
	});
}
function Field({ label, htmlFor, children, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: `grid gap-1.5 ${className ?? ""}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
			htmlFor,
			children: label
		}), children]
	});
}
var findings = [
	{
		tag: "01",
		text: "Care tumbuh volume, tapi menyumbang 61% retur."
	},
	{
		tag: "02",
		text: "Margin Sumatera 36% — 8 poin di atas Jawa."
	},
	{
		tag: "03",
		text: "24 SKU ekor bisa dipotong tanpa menyentuh 80% omzet."
	}
];
function Hero() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "atas",
		className: "relative overflow-hidden",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-0 hero-glow" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16 lg:py-20",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "stagger-in max-w-xl",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-mono text-[0.7rem] tracking-[0.18em] text-olive uppercase",
						children: "NNX · Data & Digital Insight"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-5 font-display text-[2.35rem] leading-[1.12] tracking-tight text-cream sm:text-5xl lg:text-[3.35rem]",
						children: "Jasa analisis data yang mengubah angka menjadi keputusan."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 max-w-lg text-base leading-relaxed text-mist",
						children: "Kami merapikan data bisnis, digital, dan riset Anda — lalu mengembalikannya sebagai temuan, rekomendasi, dan dashboard yang siap dibawa ke rapat. Bukan tumpukan chart. Bukan Excel yang hanya Anda yang mengerti."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 flex flex-col gap-3 sm:flex-row",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							size: "lg",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: "#brief",
								children: ["Minta brief analisis", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							variant: "outline",
							size: "lg",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: "#studio",
								children: ["Coba studio insight", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowDownRight, { className: "size-4" })]
							})
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
						className: "mt-10 grid grid-cols-3 gap-4 border-t border-line pt-6",
						children: [
							["5 hari", "Diagnostik pertama"],
							["3 lapisan", "Temuan · saran · alat"],
							["Satu sumber", "Angka yang bisa diaudit"]
						].map(([k, v]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
							className: "font-display text-xl text-cream sm:text-2xl",
							children: k
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
							className: "mt-1 text-xs leading-snug text-mist",
							children: v
						})] }, k))
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("article", {
				className: "hero-rise rounded-xl bg-paper p-4 text-ink shadow-paper sm:p-5",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-lg bg-cream px-4 py-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-mono text-[0.65rem] tracking-[0.16em] text-olive uppercase",
								children: "Laporan insight · Q3"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-mono text-[0.65rem] text-ink/45",
								children: "NNX / 08.10"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-3 font-display text-2xl leading-tight tracking-tight",
							children: "Omzet naik, margin tidak ikut."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm leading-relaxed text-ink/65",
							children: "Ringkasan eksekutif untuk ritel fiktif — contoh deliverable, bukan klien nyata."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-5 grid grid-cols-3 gap-2",
							children: [
								["+8,4%", "Omzet"],
								["−1,1 pt", "Margin"],
								["12,4%", "Retur"]
							].map(([n, l]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-md bg-paper-deep px-2.5 py-2.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-mono text-sm tabular-nums",
									children: n
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-0.5 text-[0.7rem] text-ink/50",
									children: l
								})]
							}, l))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
							className: "mt-5 space-y-3 border-t border-ink-line pt-4",
							children: findings.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex gap-3 text-sm leading-snug",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-mono text-[0.65rem] text-olive",
									children: f.tag
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: f.text })]
							}, f.tag))
						})
					]
				})
			})]
		})]
	});
}
var demoSets = {
	retail: {
		id: "retail",
		title: "Penjualan ritel 6 bulan",
		context: "Contoh: omzet vs retur, 4 kategori, 3 wilayah.",
		kpis: [
			{
				label: "Omzet",
				value: "Rp 11,8 M",
				hint: "+8,4% vs semester lalu",
				tone: "ok"
			},
			{
				label: "Margin kotor",
				value: "31,2%",
				hint: "Turun 1,1 pt",
				tone: "warn"
			},
			{
				label: "Retur",
				value: "12,4%",
				hint: "Tertinggi di kategori Care",
				tone: "warn"
			},
			{
				label: "SKU hidup",
				value: "18 / 42",
				hint: "43% SKU menopang 81% omzet",
				tone: "neutral"
			}
		],
		trend: [
			{
				label: "Mei",
				a: 1820,
				b: 410
			},
			{
				label: "Jun",
				a: 1910,
				b: 390
			},
			{
				label: "Jul",
				a: 1760,
				b: 470
			},
			{
				label: "Agu",
				a: 2040,
				b: 430
			},
			{
				label: "Sep",
				a: 2180,
				b: 455
			},
			{
				label: "Okt",
				a: 2090,
				b: 520
			}
		],
		bars: [
			{
				name: "Jawa",
				value: 54
			},
			{
				name: "Sumatera",
				value: 27
			},
			{
				name: "Bali–Nusra",
				value: 19
			}
		],
		trendTitle: "Omzet vs retur (juta Rp)",
		barTitle: "Kontribusi omzet per wilayah (%)",
		findings: [
			{
				title: "Care menekan margin, bukan volume",
				body: "Kategori Care tumbuh 14% volume tapi menyumbang 61% retur. Promo bundling di Juli berkorelasi dengan lonjakan komplain ukuran."
			},
			{
				title: "Jawa masih mesin kas, Sumatera lebih sehat",
				body: "Margin Sumatera 36% vs Jawa 28%. Diskon kanal modern trade di Jawa belum diuji ulang sejak Q1."
			},
			{
				title: "Potong ekor SKU, jangan tambah katalog",
				body: "24 SKU di bawah ambang 0,6% kontribusi. Membersihkan ekor ini menghemat ~9% biaya stok tanpa menyentuh 80% omzet."
			}
		]
	},
	campaign: {
		id: "campaign",
		title: "Funnel kampanye digital",
		context: "Contoh: spend, CTR, CVR, CAC lintas 4 kanal.",
		kpis: [
			{
				label: "Spend",
				value: "Rp 420 jt",
				hint: "30 hari terakhir",
				tone: "neutral"
			},
			{
				label: "CAC blended",
				value: "Rp 186 rb",
				hint: "Target 150 rb",
				tone: "warn"
			},
			{
				label: "CVR landing",
				value: "2,1%",
				hint: "Meta 3,4% · TikTok 0,9%",
				tone: "ok"
			},
			{
				label: "LTV 90 hari",
				value: "Rp 410 rb",
				hint: "Payback 2,2 bulan",
				tone: "ok"
			}
		],
		trend: [
			{
				label: "M1",
				a: 92,
				b: 168
			},
			{
				label: "M2",
				a: 104,
				b: 172
			},
			{
				label: "M3",
				a: 118,
				b: 181
			},
			{
				label: "M4",
				a: 96,
				b: 190
			}
		],
		bars: [
			{
				name: "Meta",
				value: 34
			},
			{
				name: "Google",
				value: 29
			},
			{
				name: "TikTok",
				value: 22
			},
			{
				name: "CRM",
				value: 15
			}
		],
		trendTitle: "Leads vs CAC (ribu Rp)",
		barTitle: "Share spend per kanal (%)",
		findings: [
			{
				title: "TikTok mahal di akuisisi, lemah di retensi",
				body: "CAC TikTok Rp 248 rb dengan repeat 11%. Meta repeat 29%. Anggaran kreatif short-form tidak diikat ke katalog retensi."
			},
			{
				title: "Landing mobile kalah 1,6 detik",
				body: "LCP 4,1s di 4G. Percobaan salin hero yang lebih pendek menaikkan CVR 18% di sampel 9 hari — belum di-rollout."
			},
			{
				title: "CRM adalah kanal tersembunyi",
				body: "15% spend, 31% revenue. Frequency cap email terlalu longgar; cohort minggu ke-3 sudah saturasi."
			}
		]
	},
	survey: {
		id: "survey",
		title: "Survei kepuasan pelanggan",
		context: "Contoh: NPS, driver, n = 842, 3 segmen.",
		kpis: [
			{
				label: "NPS",
				value: "32",
				hint: "Promoter 48% · Detractor 16%",
				tone: "ok"
			},
			{
				label: "CSAT",
				value: "4,1 / 5",
				hint: "Turun 0,3 di pengiriman",
				tone: "warn"
			},
			{
				label: "Respon",
				value: "38%",
				hint: "n = 842 dari 2.210",
				tone: "neutral"
			},
			{
				label: "Top driver",
				value: "Janji tiba",
				hint: "β = 0,41 pada regresi",
				tone: "ok"
			}
		],
		trend: [
			{
				label: "Q1",
				a: 28,
				b: 4.3
			},
			{
				label: "Q2",
				a: 35,
				b: 4.4
			},
			{
				label: "Q3",
				a: 31,
				b: 4.2
			},
			{
				label: "Q4",
				a: 32,
				b: 4.1
			}
		],
		bars: [
			{
				name: "Janji tiba",
				value: 41
			},
			{
				name: "Respon CS",
				value: 22
			},
			{
				name: "Harga",
				value: 18
			},
			{
				name: "Produk",
				value: 12
			},
			{
				name: "Aplikasi",
				value: 7
			}
		],
		trendTitle: "NPS kuartalan",
		barTitle: "Kontribusi driver terhadap NPS (bobot)",
		findings: [
			{
				title: "Pengiriman, bukan harga, yang memecah NPS",
				body: "Regresi ordinal: janji tiba (β 0,41) jauh di atas harga (β 0,12). Diskon tidak menutup luka keterlambatan >1 hari."
			},
			{
				title: "Segmen korporat diam-diam detractor",
				body: "NPS B2B −4 vs B2C +41. Akar: SLA tiket 18 jam vs janji 4 jam di kontrak."
			},
			{
				title: "Aplikasi tidak urgensi Q1",
				body: "Keluhan UI 7% dan tidak signifikan (p = 0,21). Roadmap fitur bisa mundur; budget lebih baik ke operasi last-mile."
			}
		]
	}
};
function splitCsv(text) {
	const rows = [];
	let row = [];
	let cell = "";
	let inQuotes = false;
	const src = text.replace(/^\uFEFF/, "");
	for (let i = 0; i < src.length; i += 1) {
		const ch = src[i];
		const next = src[i + 1];
		if (inQuotes) {
			if (ch === "\"" && next === "\"") {
				cell += "\"";
				i += 1;
			} else if (ch === "\"") inQuotes = false;
			else cell += ch;
		} else if (ch === "\"") inQuotes = true;
		else if (ch === "," || ch === ";" || ch === "	") {
			row.push(cell.trim());
			cell = "";
		} else if (ch === "\n") {
			row.push(cell.trim());
			cell = "";
			if (row.some((c) => c.length > 0)) rows.push(row);
			row = [];
		} else if (ch !== "\r") cell += ch;
	}
	row.push(cell.trim());
	if (row.some((c) => c.length > 0)) rows.push(row);
	return rows;
}
function toNumber(raw) {
	if (!raw) return null;
	const cleaned = raw.replace(/\s/g, "").replace(/%$/, "");
	const normalized = cleaned.includes(",") && !cleaned.includes(".") ? cleaned.replace(/\./g, "").replace(",", ".") : cleaned.replace(/,/g, "");
	if (!/^-?\d+(\.\d+)?$/.test(normalized)) return null;
	const n = Number(normalized);
	return Number.isFinite(n) ? n : null;
}
function analyzeCsv(text) {
	const table = splitCsv(text).slice(0, 501);
	if (table.length < 2) throw new Error("CSV perlu header dan minimal satu baris data.");
	const headers = table[0].map((h, i) => h || `kolom_${i + 1}`).slice(0, 12);
	const body = table.slice(1, 501).map((r) => r.slice(0, headers.length));
	const cols = headers.map((name, idx) => body.map((r) => r[idx] ?? ""));
	const profiles = headers.map((name, idx) => {
		const values = cols[idx];
		const missing = values.filter((v) => v === "").length;
		const nums = values.map(toNumber).filter((v) => v !== null);
		const isNum = nums.length >= Math.max(3, values.length * .6);
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
				mean: sum / nums.length
			};
		}
		const counts = /* @__PURE__ */ new Map();
		for (const v of values) {
			if (!v) continue;
			counts.set(v, (counts.get(v) ?? 0) + 1);
		}
		return {
			name,
			kind: "text",
			missing,
			unique,
			top: [...counts.entries()].sort((a, b) => b[1] - a[1]).slice(0, 5).map(([value, count]) => ({
				value,
				count
			}))
		};
	});
	const numeric = profiles.find((p) => p.kind === "number");
	const category = profiles.find((p) => p.kind === "text" && (p.top?.length ?? 0) > 1);
	const numericIdx = numeric ? headers.indexOf(numeric.name) : -1;
	const catIdx = category ? headers.indexOf(category.name) : -1;
	let bars = [];
	if (category && numeric && catIdx >= 0 && numericIdx >= 0) {
		const acc = /* @__PURE__ */ new Map();
		for (const r of body) {
			const key = r[catIdx] || "(kosong)";
			const n = toNumber(r[numericIdx]) ?? 0;
			acc.set(key, (acc.get(key) ?? 0) + n);
		}
		bars = [...acc.entries()].sort((a, b) => b[1] - a[1]).slice(0, 6).map(([name, value]) => ({
			name,
			value: Math.round(value * 100) / 100
		}));
	} else if (category?.top) bars = category.top.map((t) => ({
		name: t.value,
		value: t.count
	}));
	const trend = numeric && numericIdx >= 0 ? body.slice(0, 12).map((r, i) => ({
		label: String(i + 1),
		a: toNumber(r[numericIdx]) ?? 0
	})) : body.slice(0, 8).map((_, i) => ({
		label: String(i + 1),
		a: 0
	}));
	const missingTotal = profiles.reduce((a, p) => a + p.missing, 0);
	const missingPct = body.length ? missingTotal / (body.length * profiles.length) * 100 : 0;
	const findings = [
		{
			title: numeric ? `${numeric.name} adalah kolom angka utama` : "Tidak ada kolom angka yang cukup bersih",
			body: numeric ? `Rata-rata ${formatPlain(numeric.mean ?? 0)}, rentang ${formatPlain(numeric.min ?? 0)} – ${formatPlain(numeric.max ?? 0)}. Ini kandidat metrik utama laporan.` : "Kami akan menstandarkan format angka (koma/titik, persen, mata uang) sebelum analisis penuh."
		},
		{
			title: missingPct > 8 ? "Kualitas data perlu dibersihkan dulu" : "Kelengkapan data relatif baik",
			body: `${missingPct.toFixed(1)}% sel kosong dari ${body.length} baris × ${profiles.length} kolom. ${missingPct > 8 ? "Audit cleansing disarankan sebelum dashboard." : "Cukup untuk diagnostik cepat."}`
		},
		{
			title: category ? `Segmen terkuat: ${category.top?.[0]?.value ?? "—"}` : "Belum ada kolom kategori yang jelas",
			body: category ? `Kolom ${category.name} punya ${category.unique} nilai unik. Ini bisa jadi sumbu breakdown wilayah, kanal, atau segmen.` : "Tambahkan kolom dimensi (wilayah, kanal, periode) agar insight bisa ditindaklanjuti."
		}
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
			{
				label: "Baris",
				value: String(body.length),
				hint: "Dipotong di 500 untuk pratinjau",
				tone: "neutral"
			},
			{
				label: "Kolom",
				value: String(profiles.length),
				hint: "Maks 12 kolom dibaca",
				tone: "neutral"
			},
			{
				label: "Kosong",
				value: `${missingPct.toFixed(1)}%`,
				hint: "Sel tanpa nilai",
				tone: missingPct > 8 ? "warn" : "ok"
			},
			{
				label: "Metrik",
				value: numeric?.name ?? "—",
				hint: category ? `dipecah by ${category.name}` : "belum ada dimensi",
				tone: numeric ? "ok" : "warn"
			}
		]
	};
}
function formatPlain(n) {
	return new Intl.NumberFormat("id-ID", { maximumFractionDigits: 2 }).format(n);
}
var sampleCsv = `bulan,wilayah,kanal,omzet,retur
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
var tabs = [
	{
		id: "retail",
		label: "Ritel"
	},
	{
		id: "campaign",
		label: "Digital"
	},
	{
		id: "survey",
		label: "Survei"
	},
	{
		id: "csv",
		label: "Data Anda"
	}
];
function InsightStudio() {
	const [tab, setTab] = (0, import_react.useState)("retail");
	const [csvText, setCsvText] = (0, import_react.useState)(sampleCsv);
	const [csvError, setCsvError] = (0, import_react.useState)(null);
	const [csvResult, setCsvResult] = (0, import_react.useState)(() => {
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
	function onFile(file) {
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
	const trendTitle = tab === "csv" ? csvResult?.numericName ? `Nilai ${csvResult.numericName} (baris awal)` : "Pratinjau deret" : demo?.trendTitle;
	const barTitle = tab === "csv" ? csvResult?.categoryName ? `Agregasi per ${csvResult.categoryName}` : "Distribusi kategori" : demo?.barTitle;
	const tooltipStyle = (0, import_react.useMemo)(() => ({
		background: "#efece4",
		border: "1px solid rgb(20 22 19 / 0.12)",
		borderRadius: 8,
		color: "#141613",
		fontSize: 12
	}), []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "studio",
		className: "border-t border-line bg-panel",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "max-w-2xl",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-mono text-[0.7rem] tracking-[0.18em] text-olive uppercase",
								children: "Studio insight"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-3 font-display text-3xl tracking-tight text-cream sm:text-4xl",
								children: "Lihat bentuk kerjanya, sebelum Anda mengirim data asli."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 max-w-xl text-sm leading-relaxed text-mist",
								children: "Tiga kasus contoh, atau unggah CSV Anda. Pratinjau ini berjalan di peramban — berkas tidak dikirim ke server."
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex flex-wrap gap-2",
						role: "tablist",
						"aria-label": "Sumber data",
						children: tabs.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							role: "tab",
							"aria-selected": tab === t.id,
							onClick: () => setTab(t.id),
							className: `h-11 rounded-sm px-3.5 text-sm transition-colors duration-150 ${tab === t.id ? "bg-paper text-ink" : "text-mist shadow-[0_0_0_1px_var(--color-line-strong)] hover:text-cream"}`,
							children: t.label
						}, t.id))
					})]
				}),
				tab === "csv" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 rounded-lg bg-canvas p-4 shadow-[0_0_0_1px_var(--color-line)] sm:p-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-mist",
								children: "Tempel CSV atau unggah berkas. Maksimal 500 baris, 12 kolom."
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "inline-flex h-11 cursor-pointer items-center rounded-sm bg-paper px-4 text-sm font-medium text-ink",
								children: ["Unggah CSV", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "file",
									accept: ".csv,.tsv,text/csv,text/plain",
									className: "sr-only",
									onChange: (e) => onFile(e.target.files?.[0])
								})]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
							value: csvText,
							onChange: (e) => setCsvText(e.target.value),
							spellCheck: false,
							className: "mt-3 min-h-32 w-full rounded-md bg-panel px-3 py-2 font-mono text-xs text-cream shadow-[0_0_0_1px_var(--color-line)] focus-visible:outline-none focus-visible:shadow-[0_0_0_2px_var(--color-olive)]"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-3 flex flex-wrap items-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								onClick: runCsv,
								size: "sm",
								children: "Analisis pratinjau"
							}), csvError ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-warn",
								children: csvError
							}) : null]
						})
					]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-6 text-sm text-mist",
					children: demo?.context
				}),
				kpis ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 grid grid-cols-2 gap-3 lg:grid-cols-4",
					children: kpis.map((k) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-md bg-canvas px-4 py-3 shadow-[0_0_0_1px_var(--color-line)]",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-mist",
								children: k.label
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: `mt-1 font-display text-2xl tabular-nums tracking-tight ${k.tone === "warn" ? "text-[#d7b4a2]" : k.tone === "ok" ? "text-[#c5d1c3]" : "text-cream"}`,
								children: k.value
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-[0.7rem] text-mist",
								children: k.hint
							})
						]
					}, k.label))
				}) : null,
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-4 grid gap-3 lg:grid-cols-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
						className: "rounded-lg bg-canvas p-4 shadow-[0_0_0_1px_var(--color-line)]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("figcaption", {
							className: "mb-3 text-xs text-mist",
							children: trendTitle
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "h-56",
							children: trend && trend.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, {
								width: "100%",
								height: "100%",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(LineChart, {
									data: trend,
									margin: {
										top: 8,
										right: 8,
										left: 0,
										bottom: 0
									},
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartesianGrid, {
											stroke: "rgba(255,255,255,0.06)",
											vertical: false
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
											dataKey: "label",
											stroke: "#9aa094",
											fontSize: 11,
											tickLine: false,
											axisLine: false
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, {
											stroke: "#9aa094",
											fontSize: 11,
											tickLine: false,
											axisLine: false,
											width: 36
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, { contentStyle: tooltipStyle }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Line, {
											type: "monotone",
											dataKey: "a",
											stroke: "#efece4",
											strokeWidth: 2,
											dot: false
										}),
										trend.some((p) => p.b !== void 0) ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Line, {
											type: "monotone",
											dataKey: "b",
											stroke: "#7a8774",
											strokeWidth: 2,
											dot: false
										}) : null
									]
								})
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmptyChart, {})
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
						className: "rounded-lg bg-canvas p-4 shadow-[0_0_0_1px_var(--color-line)]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("figcaption", {
							className: "mb-3 text-xs text-mist",
							children: barTitle
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "h-56",
							children: bars && bars.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, {
								width: "100%",
								height: "100%",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(BarChart, {
									data: bars,
									margin: {
										top: 8,
										right: 8,
										left: 0,
										bottom: 0
									},
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartesianGrid, {
											stroke: "rgba(255,255,255,0.06)",
											vertical: false
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
											dataKey: "name",
											stroke: "#9aa094",
											fontSize: 11,
											tickLine: false,
											axisLine: false
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, {
											stroke: "#9aa094",
											fontSize: 11,
											tickLine: false,
											axisLine: false,
											width: 36
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, {
											contentStyle: tooltipStyle,
											formatter: (v) => formatNumber(Number(v), 1)
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bar, {
											dataKey: "value",
											fill: "#efece4",
											radius: [
												4,
												4,
												0,
												0
											]
										})
									]
								})
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmptyChart, {})
						})]
					})]
				}),
				findings ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
					className: "mt-4 grid gap-3 md:grid-cols-3",
					children: findings.map((f, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "rounded-lg bg-paper p-4 text-ink shadow-paper",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "font-mono text-[0.65rem] tracking-[0.14em] text-olive",
								children: ["Temuan ", String(i + 1).padStart(2, "0")]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-2 font-display text-lg leading-snug tracking-tight",
								children: f.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm leading-relaxed text-ink/70",
								children: f.body
							})
						]
					}, f.title))
				}) : null,
				tab === "csv" && csvResult ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-4 overflow-x-auto rounded-lg bg-canvas shadow-[0_0_0_1px_var(--color-line)]",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
						className: "min-w-full text-left text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
							className: "text-xs text-mist",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "px-4 py-3 font-medium",
									children: "Kolom"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "px-4 py-3 font-medium",
									children: "Tipe"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "px-4 py-3 font-medium",
									children: "Unik"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "px-4 py-3 font-medium",
									children: "Kosong"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "px-4 py-3 font-medium",
									children: "Ringkas"
								})
							] })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: csvResult.profiles.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
							className: "border-t border-line",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "px-4 py-2.5 font-medium text-cream",
									children: p.name
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "px-4 py-2.5 text-mist",
									children: p.kind === "number" ? "Angka" : "Teks"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "px-4 py-2.5 tabular-nums text-mist",
									children: p.unique
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "px-4 py-2.5 tabular-nums text-mist",
									children: p.missing
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "px-4 py-2.5 text-mist",
									children: p.kind === "number" ? `min ${formatNumber(p.min ?? 0, 1)} · max ${formatNumber(p.max ?? 0, 1)}` : p.top?.map((t) => t.value).slice(0, 3).join(", ") || "—"
								})
							]
						}, p.name)) })]
					})
				}) : null
			]
		})
	});
}
function EmptyChart() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex h-full items-center justify-center text-sm text-mist",
		children: "Tidak ada deret yang bisa digambar."
	});
}
var services = [
	{
		code: "01",
		title: "Analisis kinerja bisnis",
		body: "Ubah data penjualan, biaya, dan operasional menjadi peta profit. Kami temukan produk, kanal, dan wilayah yang benar-benar menopang margin — plus yang diam-diam menggerusnya.",
		deliverables: [
			"Laporan P&L insight",
			"Driver analisis",
			"Rekomendasi 90 hari"
		]
	},
	{
		code: "02",
		title: "Analitik digital & funnel",
		body: "Satukan iklan, web, CRM, dan konversi. Kami hitung CAC, LTV, dan titik bocor funnel — bukan sekadar screenshot dashboard iklan.",
		deliverables: [
			"Atribusi kanal",
			"Audit tracking",
			"Prioritas eksperimen"
		]
	},
	{
		code: "03",
		title: "Dashboard eksekutif",
		body: "Satu sumber kebenaran untuk rapat. Metrik yang disepakati, visual yang tenang, dan angka yang bisa diaudit ulang dari data sumber.",
		deliverables: [
			"Model data",
			"Dashboard live",
			"Panduan baca insight"
		]
	},
	{
		code: "04",
		title: "Riset, survei & statistik",
		body: "Dari NPS sampai uji hipotesis. Kami merancang analisis, mengolah data, dan menulis interpretasi yang bisa dipertanggungjawabkan — untuk bisnis maupun penelitian.",
		deliverables: [
			"Uji statistik",
			"Segmentasi",
			"Narasi temuan"
		]
	},
	{
		code: "05",
		title: "Forecast & skenario",
		body: "Proyeksi permintaan, kas, dan kapasitas dengan asumsi yang transparan. Bukan black box — setiap skenario bisa diuji.",
		deliverables: [
			"Baseline forecast",
			"Skenario best/base/worst",
			"Sensitivitas"
		]
	},
	{
		code: "06",
		title: "Audit & pembersihan data",
		body: "Sebelum insight, fondasinya harus bersih. Kami cek duplikat, missing, inkonsistensi unit, dan rantai kepemilikan data.",
		deliverables: [
			"Skor kualitas",
			"Aturan cleansing",
			"Kamus data"
		]
	}
];
var steps = [
	{
		n: "01",
		title: "Brief & scoping",
		body: "Kami rumuskan pertanyaan keputusan, bukan daftar chart. Hasilnya: ruang lingkup, sumber data, dan definisi sukses yang disepakati."
	},
	{
		n: "02",
		title: "Audit & rapikan",
		body: "Data dicek, dibersihkan, dan distandarkan. Anda mendapat catatan kualitas sebelum analisis dimulai."
	},
	{
		n: "03",
		title: "Analisis",
		body: "Deskriptif, diagnostik, hingga prediktif sesuai brief. Setiap temuan diikat ke bukti di tabel sumber."
	},
	{
		n: "04",
		title: "Insight & rekomendasi",
		body: "Bukan slide penuh grafik. Tiga sampai tujuh keputusan yang bisa diambil minggu ini, lengkap dengan dampak perkiraan."
	},
	{
		n: "05",
		title: "Serah terima",
		body: "Laporan, file kerja, dan dashboard. Tim Anda bisa mengulang analisis tanpa bergantung pada kami."
	}
];
var packages = [
	{
		name: "Diagnostik",
		time: "5 hari kerja",
		from: "Mulai Rp 8 juta",
		featured: false,
		points: [
			"Audit kualitas data",
			"5–7 temuan prioritas",
			"Memo eksekutif 8–12 halaman",
			"Sesi bedah 60 menit"
		]
	},
	{
		name: "Insight",
		time: "2–3 minggu",
		from: "Mulai Rp 18 juta",
		featured: true,
		points: [
			"Semua di Diagnostik",
			"Analisis mendalam per pertanyaan",
			"Rekomendasi 90 hari",
			"Workbook sumber + visual",
			"Presentasi direksi"
		]
	},
	{
		name: "Dashboard",
		time: "3–4 minggu, lalu retainer",
		from: "Mulai Rp 24 juta",
		featured: false,
		points: [
			"Model data yang terdokumentasi",
			"Dashboard eksekutif live",
			"Pelatihan baca insight",
			"Retainer pemeliharaan opsional"
		]
	}
];
var audiences = [
	{
		title: "Tim manajemen",
		body: "Butuh angka yang sama di setiap rapat — bukan tiga versi Excel yang saling bertentangan."
	},
	{
		title: "Brand & growth",
		body: "Ingin tahu kanal mana yang benar-benar menghasilkan, bukan yang hanya terlihat ramai."
	},
	{
		title: "Operasional & supply",
		body: "Perlu melihat stok, lead time, dan permintaan tanpa menunggu tutup bulan."
	},
	{
		title: "Peneliti & institusi",
		body: "Analisis statistik yang rapi, bisa diaudit, dan ditulis dalam bahasa yang bisa dibela di sidang atau board."
	}
];
function MethodSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "metode",
		className: "border-t border-line",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "max-w-2xl",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-mono text-[0.7rem] tracking-[0.18em] text-olive uppercase",
						children: "Metode"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 font-display text-3xl tracking-tight text-cream sm:text-4xl",
						children: "Dari brief sampai serah terima, jejaknya bisa diaudit."
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
					className: "mt-10 divide-y divide-line border-y border-line",
					children: steps.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "grid gap-3 py-6 sm:grid-cols-[5.5rem_minmax(0,14rem)_1fr] sm:items-baseline",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-mono text-xs text-olive",
								children: s.n
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display text-xl text-cream",
								children: s.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm leading-relaxed text-mist",
								children: s.body
							})
						]
					}, s.n))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-14",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-display text-2xl text-cream",
						children: "Untuk siapa"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-6 grid gap-3 sm:grid-cols-2",
						children: audiences.map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: "rounded-lg bg-panel p-5 shadow-[0_0_0_1px_var(--color-line)]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
								className: "font-medium text-cream",
								children: a.title
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm leading-relaxed text-mist",
								children: a.body
							})]
						}, a.title))
					})]
				})
			]
		})
	});
}
function PackagesSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "paket",
		className: "border-t border-line bg-panel",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "max-w-2xl",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-mono text-[0.7rem] tracking-[0.18em] text-olive uppercase",
					children: "Paket"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-3 font-display text-3xl tracking-tight text-cream sm:text-4xl",
					children: "Lingkup jelas. Harga mulai. Isi disesuaikan brief."
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10 grid gap-3 lg:grid-cols-3",
				children: packages.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: `flex flex-col rounded-lg p-6 ${p.featured ? "bg-paper text-ink shadow-paper" : "bg-canvas text-cream shadow-[0_0_0_1px_var(--color-line)]"}`,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: `font-mono text-[0.65rem] tracking-[0.16em] uppercase ${p.featured ? "text-olive" : "text-olive"}`,
							children: p.time
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-2 font-display text-2xl tracking-tight",
							children: p.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: `mt-1 text-sm ${p.featured ? "text-ink/60" : "text-mist"}`,
							children: p.from
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-5 flex-1 space-y-2 text-sm",
							children: p.points.map((pt) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
								className: p.featured ? "text-ink/80" : "text-mist",
								children: pt
							}, pt))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							className: "mt-6 w-full",
							variant: p.featured ? "ink" : "primary",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#brief",
								children: "Ajukan paket ini"
							})
						})
					]
				}, p.name))
			})]
		})
	});
}
function ServicesSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "layanan",
		className: "border-t border-line",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "max-w-2xl",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-mono text-[0.7rem] tracking-[0.18em] text-olive uppercase",
					children: "Layanan"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-3 font-display text-3xl tracking-tight text-cream sm:text-4xl",
					children: "Analisis yang menjawab pertanyaan keputusan, bukan yang memperbanyak grafik."
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3",
				children: services.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "flex flex-col rounded-lg bg-panel p-5 shadow-[0_0_0_1px_var(--color-line)]",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-mono text-[0.68rem] tracking-[0.14em] text-olive",
							children: s.code
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-3 font-display text-xl tracking-tight text-cream",
							children: s.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 flex-1 text-sm leading-relaxed text-mist",
							children: s.body
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-4 space-y-1 border-t border-line pt-3",
							children: s.deliverables.map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
								className: "text-xs text-cream/80",
								children: d
							}, d))
						})
					]
				}, s.code))
			})]
		})
	});
}
function Logo({ className = "h-7" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		className: `inline-flex items-center gap-2.5 ${className}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
			viewBox: "0 0 32 32",
			className: "size-7 shrink-0",
			"aria-hidden": "true",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				width: "32",
				height: "32",
				rx: "4",
				fill: "#efece4"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M8 23V9h3.2l7.4 9.6V9H22v14h-3.2L11.4 13.4V23H8Z",
				fill: "#141613"
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "leading-none",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "block font-display text-[1.05rem] tracking-tight text-cream",
				children: "NNX"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "mt-0.5 block font-mono text-[0.62rem] tracking-[0.14em] text-mist uppercase",
				children: "Data & Digital Insight"
			})]
		})]
	});
}
function SiteFooter() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		className: "border-t border-line",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex max-w-6xl flex-col gap-6 px-4 py-10 sm:px-6 sm:flex-row sm:items-end sm:justify-between",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 max-w-sm text-sm leading-relaxed text-mist",
				children: "NNX mengubah Data & Digital Insight menjadi jasa analisis data: audit, temuan, rekomendasi, dan dashboard yang bisa dipertanggungjawabkan."
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-mono text-[0.7rem] tracking-[0.12em] text-mist uppercase",
				children: "Jakarta · Analisis, bukan ornamentasi"
			})]
		})
	});
}
var links = [
	{
		href: "#layanan",
		label: "Layanan"
	},
	{
		href: "#studio",
		label: "Studio"
	},
	{
		href: "#metode",
		label: "Metode"
	},
	{
		href: "#paket",
		label: "Paket"
	}
];
function SiteHeader() {
	const [open, setOpen] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "sticky top-0 z-40 border-b border-line bg-canvas/92 backdrop-blur-md",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: "#atas",
					className: "shrink-0",
					"aria-label": "NNX beranda",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, {})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "hidden items-center gap-7 md:flex",
					"aria-label": "Utama",
					children: links.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: l.href,
						className: "text-sm text-mist transition-colors duration-150 hover:text-cream",
						children: l.label
					}, l.href))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "hidden md:block",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						size: "sm",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#brief",
							children: "Minta brief"
						})
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "inline-flex size-11 items-center justify-center rounded-sm text-cream md:hidden",
					"aria-expanded": open,
					"aria-label": open ? "Tutup menu" : "Buka menu",
					onClick: () => setOpen((v) => !v),
					children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "size-5" })
				})
			]
		}), open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "border-t border-line px-4 py-4 md:hidden",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
				className: "flex flex-col gap-1",
				"aria-label": "Mobile",
				children: [links.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: l.href,
					className: "flex min-h-11 items-center text-sm text-cream",
					onClick: () => setOpen(false),
					children: l.label
				}, l.href)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					className: "mt-2 w-full",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "#brief",
						onClick: () => setOpen(false),
						children: "Minta brief"
					})
				})]
			})
		}) : null]
	});
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-dvh bg-canvas",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ServicesSection, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InsightStudio, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MethodSection, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PackagesSection, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BriefForm, {})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
		]
	});
}
//#endregion
export { Home as component };
