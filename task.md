# Checklist Prioritas Pembangunan "Petani Setia"

Berikut adalah urutan langkah (prioritas) yang harus dikerjakan untuk membangun website katalog digital Petani Setia. Kita akan menggunakan pendekatan dari dasar (setup) hingga perakitan (assembly) dan penyempurnaan (polishing).

## 1. Tahap Persiapan (Setup & Config)
- [x] Inisialisasi project React menggunakan Vite (`npm create vite@latest . -- --template react`).
- [x] Install dan konfigurasi Tailwind CSS (`npm install -D tailwindcss postcss autoprefixer` & `npx tailwindcss init -p`).
- [x] Bersihkan file default bawaan Vite (App.css, index.css default).
- [x] Buat struktur folder modular di dalam `src/` (`components`, `sections`, `data`, `pages`).

## 2. Penyediaan Data
- [x] Buat file `src/data/products.js`.
- [x] Isi dengan dummy data produk (berisi `id`, `name`, `price`, `description`, `image`).

## 3. Pembuatan Komponen Reusable (UI Elements)
- [x] Buat `ProductCard.jsx` (Menerima props data produk, menampilkan gambar, nama, harga, dan tombol).
- [x] Buat `Navbar.jsx` (Desain sticky dengan navigasi anchor link ke berbagai section).
- [x] Buat `Hero.jsx` (Bagian sambutan utama dengan judul, deskripsi singkat, dan tombol CTA).
- [x] Buat `Footer.jsx` (Informasi hak cipta dan link relevan).

## 4. Pembuatan Bagian Halaman (Sections)
- [x] Buat `About.jsx` (Penjelasan singkat tentang UMKM Petani Setia).
- [x] Buat `ProductList.jsx` (Melakukan map() dari `products.js` ke komponen `ProductCard` dengan grid yang responsif).
- [x] Buat `Marketplace.jsx` (Berisi link/tombol yang mengarah ke Shopee dan Tokopedia).
- [x] Buat `Contact.jsx` (Informasi detail kontak dan form sederhana).

## 5. Perakitan Halaman Dasar (Assembly)
- [x] Buat `pages/Home.jsx` dan gabungkan semua Navbar, Hero, Section, dan Footer secara berurutan.
- [x] Update `App.jsx` untuk menampilkan halaman `Home.jsx`.
- [x] Update `index.css` dengan arahan Tailwind (base, components, utilities) serta setting warna primary/background.

## 6. Finishing & Polishing
- [ ] Lakukan tes responsivitas mulai dari Mobile (1 kolom), Tablet (2 kolom), dan Desktop (3-4 kolom).
- [ ] Tambahkan _hover effects_ dan bayangan (shadow) yang estetik pada tombol dan kartu produk.
- [ ] Periksa kembali performa dan kebersihan kode (clean code check).
