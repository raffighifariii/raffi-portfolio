# Portfolio — Raffi Ghifari

Portfolio pribadi. Stack: **Vite + React + Tailwind CSS** (statis, tanpa backend / database).
Tema: glassmorphism dengan aksen aurora (violet → cyan → pink), toggle bahasa ID/EN.

## Jalanin di lokal

```bash
npm install
npm run dev
```

Buka alamat yang muncul (biasanya http://localhost:5173).

## Ganti konten

Hampir semua isi ada di **satu file**: `src/data.js`.
Bagian yang ditandai `// EDIT` wajib kamu ganti:

- `PROFILE` — nama, email, link GitHub & LinkedIn.
- `PROJECTS` — daftar project (judul, tahun, deskursi ID/EN, link, stack).
- `SKILLS` — kelompok skill.
- `LOGOS` — logo tech di section Skills. `key` harus cocok dengan nama
  ikon di `react-icons/si` (lihat map di `src/components/Skills.jsx`).
  Cari nama logo lain di https://react-icons.github.io/react-icons/icons/si/

Judul tab & deskripsi SEO ada di `index.html`.

## Build untuk produksi

```bash
npm run build
```

Hasilnya ada di folder **`dist/`**. Itu yang di-upload ke hosting.

## Upload ke Hostinger

1. Login hPanel → **File Manager** → buka `public_html`.
2. (Sekali aja) backup / pindahin file website lama dulu kalau masih perlu.
3. Hapus isi lama, lalu **upload semua isi folder `dist/`** ke dalam `public_html`
   — yang masuk itu `index.html` + folder `assets/`, **bukan** folder `dist`-nya.
4. Buka `itsraffighifari.com`. Selesai.

> Tiap kali update konten: `npm run build` lagi → upload ulang isi `dist/`.

## Catatan

- `base: "./"` di `vite.config.js` bikin path asset-nya relatif, jadi aman
  baik di root domain maupun subfolder.
- Ini single-page (navigasi pakai anchor `#about`, `#work`, dst), jadi nggak
  butuh konfigurasi rewrite/`.htaccess` apa pun di Hostinger.
- Animasi otomatis nonaktif kalau perangkat pengunjung set "reduce motion".
- Font diambil dari Google Fonts. Kalau mau full offline/lebih cepat, font bisa
  di-self-host nanti.

## Deploy alternatif (opsional)

Kalau suatu saat mau auto-deploy dari GitHub: push repo ini ke GitHub, connect
ke Vercel/Netlify (gratis), tererus arahin domain Hostinger ke sana. Tiap `git push`
langsung ke-build & live otomatis.
