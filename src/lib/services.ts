export const services = [
  {
    code: "01",
    title: "Analisis kinerja bisnis",
    body: "Ubah data penjualan, biaya, dan operasional menjadi peta profit. Kami temukan produk, kanal, dan wilayah yang benar-benar menopang margin — plus yang diam-diam menggerusnya.",
    deliverables: ["Laporan P&L insight", "Driver analisis", "Rekomendasi 90 hari"],
  },
  {
    code: "02",
    title: "Analitik digital & funnel",
    body: "Satukan iklan, web, CRM, dan konversi. Kami hitung CAC, LTV, dan titik bocor funnel — bukan sekadar screenshot dashboard iklan.",
    deliverables: ["Atribusi kanal", "Audit tracking", "Prioritas eksperimen"],
  },
  {
    code: "03",
    title: "Dashboard eksekutif",
    body: "Satu sumber kebenaran untuk rapat. Metrik yang disepakati, visual yang tenang, dan angka yang bisa diaudit ulang dari data sumber.",
    deliverables: ["Model data", "Dashboard live", "Panduan baca insight"],
  },
  {
    code: "04",
    title: "Riset, survei & statistik",
    body: "Dari NPS sampai uji hipotesis. Kami merancang analisis, mengolah data, dan menulis interpretasi yang bisa dipertanggungjawabkan — untuk bisnis maupun penelitian.",
    deliverables: ["Uji statistik", "Segmentasi", "Narasi temuan"],
  },
  {
    code: "05",
    title: "Forecast & skenario",
    body: "Proyeksi permintaan, kas, dan kapasitas dengan asumsi yang transparan. Bukan black box — setiap skenario bisa diuji.",
    deliverables: ["Baseline forecast", "Skenario best/base/worst", "Sensitivitas"],
  },
  {
    code: "06",
    title: "Audit & pembersihan data",
    body: "Sebelum insight, fondasinya harus bersih. Kami cek duplikat, missing, inkonsistensi unit, dan rantai kepemilikan data.",
    deliverables: ["Skor kualitas", "Aturan cleansing", "Kamus data"],
  },
] as const;

export const steps = [
  {
    n: "01",
    title: "Brief & scoping",
    body: "Kami rumuskan pertanyaan keputusan, bukan daftar chart. Hasilnya: ruang lingkup, sumber data, dan definisi sukses yang disepakati.",
  },
  {
    n: "02",
    title: "Audit & rapikan",
    body: "Data dicek, dibersihkan, dan distandarkan. Anda mendapat catatan kualitas sebelum analisis dimulai.",
  },
  {
    n: "03",
    title: "Analisis",
    body: "Deskriptif, diagnostik, hingga prediktif sesuai brief. Setiap temuan diikat ke bukti di tabel sumber.",
  },
  {
    n: "04",
    title: "Insight & rekomendasi",
    body: "Bukan slide penuh grafik. Tiga sampai tujuh keputusan yang bisa diambil minggu ini, lengkap dengan dampak perkiraan.",
  },
  {
    n: "05",
    title: "Serah terima",
    body: "Laporan, file kerja, dan dashboard. Tim Anda bisa mengulang analisis tanpa bergantung pada kami.",
  },
] as const;

export const packages = [
  {
    name: "Diagnostik",
    time: "5 hari kerja",
    from: "Mulai Rp 8 juta",
    featured: false,
    points: [
      "Audit kualitas data",
      "5–7 temuan prioritas",
      "Memo eksekutif 8–12 halaman",
      "Sesi bedah 60 menit",
    ],
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
      "Presentasi direksi",
    ],
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
      "Retainer pemeliharaan opsional",
    ],
  },
] as const;

export const audiences = [
  {
    title: "Tim manajemen",
    body: "Butuh angka yang sama di setiap rapat — bukan tiga versi Excel yang saling bertentangan.",
  },
  {
    title: "Brand & growth",
    body: "Ingin tahu kanal mana yang benar-benar menghasilkan, bukan yang hanya terlihat ramai.",
  },
  {
    title: "Operasional & supply",
    body: "Perlu melihat stok, lead time, dan permintaan tanpa menunggu tutup bulan.",
  },
  {
    title: "Peneliti & institusi",
    body: "Analisis statistik yang rapi, bisa diaudit, dan ditulis dalam bahasa yang bisa dibela di sidang atau board.",
  },
] as const;
