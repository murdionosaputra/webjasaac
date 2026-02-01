# 🌬️ RamaJaya Service — Service AC Website

Website profesional untuk jasa **Service AC & Cuci AC** yang modern, responsif, dan fokus konversi.

---

## 📁 Struktur Folder

```
service-ac-website/
│
├── index.html            → Halaman Beranda (Hero, Layanan, Testimoni, CTA)
├── tentang.html          → Tentang Kami (Profil, Visi Misi, Nilai, Tim)
├── layanan.html          → Layanan Detail (5 service cards lengkap)
├── harga.html            → Harga & Paket (6 pricing cards + catatan biaya)
├── area-layanan.html     → Area Layanan (Grid wilayah Jabodetabek)
├── testimoni.html        → Testimoni (9 ulasan pelanggan + rating)
├── kontak.html           → Kontak (Form validasi + Info + FAQ)
│
├── assets/
│   ├── css/
│   │   └── style.css     → Master stylesheet (design system lengkap)
│   ├── js/
│   │   └── script.js     → Master JavaScript (interaktivitas)
│   └── img/              → Folder gambar (kosong – gunakan ikon Bootstrap Icons)
│
└── README.md             → File ini
```

---

## ✅ Fitur yang Tersedia

### Desain & UI
- **Warna dominan:** Biru (#0f5fcf), Biru muda (#3b8cfa), Putih
- **Glassmorphism** pada navbar saat scroll
- **3D card hover effect** dengan `perspective`, `translateY`, `rotateX`
- **Animated hero** dengan floating badges dan spinning rings
- **Ambient blobs** animasi di background hero
- **Smooth scroll** & fade-in animation saat scroll (IntersectionObserver)
- **Gradient text** pada judul-judul utama
- Custom scrollbar yang elegan

### Interaktivitas (JavaScript)
- ✅ **Navbar scroll effect** — glassmorphism + shadow saat scroll
- ✅ **Scroll reveal animation** — `.rev`, `.rev-l`, `.rev-r`, `.rev-sc` + stagger delay
- ✅ **Counter animation** — angka statistik animasi saat masuk viewport
- ✅ **Back to top button** — muncul setelah scroll 500px
- ✅ **Form validation** — real-time + on-submit, inline error messages
- ✅ **Toast notification** — sukses kirim pesan
- ✅ **Mobile nav auto-close** — dropdown tutup saat link diklik
- ✅ **Active nav link** — highlight halaman yang sedang dibuka

### Konversi & SEO
- ✅ **Floating WhatsApp button** — pulse animation, link wa.me
- ✅ **CTA di setiap halaman** — WhatsApp + Telepon
- ✅ **Meta description & keywords** di setiap halaman
- ✅ **Semantic HTML5** (nav, section, footer, main)
- ✅ **Responsive** — mobile, tablet, desktop

---

## 🚀 Cara Menjalankan

1. **Download / Clone** folder `service-ac-website`
2. **Buka** `index.html` di browser (Chrome / Firefox / Safari)
3. Website siap digunakan — tidak memerlukan server atau build step

> **Catatan:** Website menggunakan **Bootstrap 5 CDN** dan **Google Fonts CDN**, sehingga membutuhkan koneksi internet untuk load aset eksternal.

---

## ⚙️ Kustomisasi

### Ubah Nomor WhatsApp
Cari dan ganti `62812345678` di semua file HTML dengan nomor WhatsApp bisnis Anda.

### Ubah Nama Perusahaan
Ganti `Arctic Cool` / `ArcticCool` di semua file HTML dan CSS.

### Ubah Warna Utama
Edit variabel CSS di `assets/css/style.css`:
```css
:root {
  --blue-700: #0f5fcf;   /* Warna primary */
  --cyan:     #00d4ff;   /* Warna aksen */
  --green-600: #25ae4e;  /* Warna WhatsApp */
}
```

### Ubah Harga
Edit langsung di `harga.html` pada elemen `.p-amt`.

### Tambah Gambar
Letakkan gambar di folder `assets/img/` dan gunakan di HTML dengan tag `<img src="assets/img/nama-gambar.jpg">`.

---

## 📦 Teknologi yang Digunakan

| Teknologi | Versi / Sumber |
|-----------|----------------|
| HTML5 | Semantic |
| CSS3 | Custom (style.css) |
| JavaScript | Vanilla JS (script.js) |
| Bootstrap | 5.3.2 (CDN) |
| Bootstrap Icons | 1.11.3 (CDN) |
| Google Fonts | Sora + Plus Jakarta Sans |

---

## 📄 Lisensi

Website ini dibuat untuk penggunaan pribadi / bisnis. Bebas dimodifikasi sesuai kebutuhan.
