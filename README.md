# Bioprocess Laboratory — Website

Website statis (React + Vite) untuk Laboratorium Bioproses, Teknik Kimia UNDIP.

## Menjalankan secara lokal

```bash
npm install
npm run dev
```

Buka `http://localhost:5173`.

## Build untuk deploy

```bash
npm run build
```

Hasil build ada di folder `dist/` — tinggal upload ke Vercel, Netlify, atau GitHub Pages.

## Struktur project

```
src/
├── components/     # Navbar, Hero, WhatsHot, PracticalNeeds, Material,
│                   # ScoresAndPoint, PhotoGallery, Footer (tiap komponen + CSS-nya sendiri)
├── pages/          # Home.jsx (gabungan semua section) & Announcement.jsx
├── data/           # SEMUA konten teks ada di sini — edit file .js di folder
│                   # ini untuk update isi web, tidak perlu sentuh komponen React
└── index.css       # design tokens (warna, font) + style global
```

## Cara update konten

Semua teks & data disimpan terpisah dari kode UI di folder `src/data/`:

- `content.js` — teks hero, "what's hot", "get to know us", link social media, footer
- `navLinks.js` — menu navbar
- `practicalNeeds.js` — daftar perlengkapan praktikum
- `material.js` — daftar modul + link PDF (taruh file PDF-nya di `public/materials/`)
- `scores.js` — papan poin/nilai
- `announcements.js` — daftar pengumuman

## Mengganti foto placeholder

Ada beberapa foto placeholder (kotak hijau dengan label) di `Hero.jsx`, `WhatsHot.jsx`,
dan `PhotoGallery.jsx`. Tiap file itu ada komentar yang menunjukkan cara import & pasang
foto asli — tinggal:

1. Taruh file foto di `src/assets/images/` (atau `src/assets/images/gallery/` untuk galeri)
2. `import namaFoto from "../assets/images/nama-file.jpg";`
3. Ganti `<div className="...-placeholder">` dengan `<img src={namaFoto} alt="..." />`

## Warna & font

Semua warna dan font didefinisikan sebagai CSS variable di `src/index.css` bagian
`:root`. Ganti nilai di situ untuk ubah tema di seluruh halaman sekaligus.
